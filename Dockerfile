# ------------------------------------------------------------------------------
# Temporary image for react.js app using a multi-stage build
# ref : https://docs.docker.com/develop/develop-images/multistage-build/
# ------------------------------------------------------------------------------
FROM node:latest as build-react

# create a shared folder and define it as current dir
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# copy the files required for node packages installation
COPY ./react-client/package.json ./
COPY ./react-client/yarn.lock ./

# install dependencies, copy code and build bundles
RUN yarn install
COPY ./react-client .
RUN yarn build

# ------------------------------------------------------------------------------
# Production image based on ubuntu:latest with nginx & python3
# ------------------------------------------------------------------------------
FROM ubuntu:latest as prod-react

WORKDIR /usr/src/app

# update, upgrade and install packages
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get upgrade -y
RUN apt-get install -y nginx curl python3 python3-distutils python3-apt

# install pip
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python3 get-pip.py

# copy flask-api requirements file and install modules
COPY ./flask-api/requirements.txt ./
RUN pip install -r requirements.txt
RUN pip install gunicorn

# copy flask code
COPY ./flask-api/app.py .

# copy built image and config onto nginx directory
COPY --from=build-react /usr/src/app/build /usr/share/nginx/html
COPY ./conf.nginx /etc/nginx/conf.d/default.conf

RUN chmod -R 766 /etc/nginx/

# ------------------------------------------------------------------------------
# Serve flask-api with gunicorn and react-client with nginx
# Ports :
#   - 5000 is used for flask-api
#   - 8080 is used by nginx to serve react-client
# You can change them but you'll have to change :
#   - for flask-api    : conf.nginx, axios calls (5000 -> @newApiPort)
#   - for react-client : CORS origins (8080 -> @newClientPort)
#
# To build and run this :
#   docker build -t @imageName .
#   docker run -d --name @containerName -e "PORT=8080" -p 8080:8080 -p 5000:5000 @imageName
# ------------------------------------------------------------------------------
# ENTRYPOINT ["-e", "PORT=8080", "-p", "8080:8080", "-p" ,"5000:5000"]
CMD gunicorn --bind 0.0.0.0:5000 app:app --daemon && \
sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && \
nginx -g 'daemon off;'