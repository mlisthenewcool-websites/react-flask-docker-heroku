https://testdriven.io/blog/deploying-flask-to-heroku-with-docker-and-gitlab/

https://github.com/testdrivenio/flask-vue-crud

https://devcenter.heroku.com/articles/container-registry-and-runtime

https://medium.com/swlh/deploy-and-secure-a-react-flask-app-with-docker-and-nginx-768ca582863b

https://stackoverflow.com/questions/54313216/nginx-config-to-enable-cors-with-origin-matching/54313586#54313586
https://gist.github.com/Stanback/7145487

https://docs.docker.com/engine/reference/builder/#entrypoint
https://docs.docker.com/engine/reference/run/#name---name

# Using another backend framework ?

https://github.com/tiangolo/fastapi

'''
map $http_origin $cors_origin_header {
    default "";
    "~(^|^http:\/\/)(localhost$|localhost:[0-9]{1,4}$)" "$http_origin";
    "~^https://test-.-dev.example.pl$" "$http_origin"; # https://test-7-dev.example.pl
    "https://test.example.com" "$http_origin";
}

map $http_origin $cors_cred {
    default "";
    "~(^|^http:\/\/)(localhost$|localhost:[0-9]{1,4}$)" "true";
    "~^https://test-.-dev.example.pl$" "true"; # https://test-7-dev.example.pl
    "https://test.example.com" "true";
}

server {
    listen 443 ssl http2;
    server_name api.example.com;

    include ssl/wildcard;

    add_header Access-Control-Allow-Origin $cors_origin_header always;
    add_header Access-Control-Allow-Credentials $cors_cred;
    add_header "Access-Control-Allow-Methods" "GET, POST, OPTIONS, HEAD";
    add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Requested-With, Content-Type, Accept";

    if ($request_method = 'OPTIONS' ) {
        return 204 no-content;
    }
}
'''