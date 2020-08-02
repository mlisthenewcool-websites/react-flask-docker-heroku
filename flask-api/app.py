from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api, Resource
import time

# ------------------------------------------------------------------------------
# Flask app config + CORS
# ------------------------------------------------------------------------------
app = Flask(__name__)
app.config.from_object(__name__)
app.config['DEBUG'] = True

# accept CORS from frontend app
CORS_ORIGINS = [
    # 'http://localhost:5000',
    'http://localhost:8080'
]
CORS(app, origins=CORS_ORIGINS, supports_credentials=True)

# ------------------------------------------------------------------------------
# RESTFUL API
# ------------------------------------------------------------------------------
API_PREFIX = '/api'
api = Api(prefix=API_PREFIX)


class AuthenticationAPI(Resource):
    def get(self):
        print('auth get', flush=True)
        return {'res': 'get'}, 200

    def post(self):
        print('auth post', flush=True)
        print(request.get_json())
        return {'res': 'post'}, 200


class TimeAPI(Resource):
    def get(self):
        print('time get', flush=True)
        return {'res': time.time()}, 200


api.add_resource(AuthenticationAPI, '/auth')
api.add_resource(TimeAPI, '/time')

api.init_app(app)
