# app.py
from flask import Flask           # import flask
from flask_cors import CORS, cross_origin
import time
import json

from pymongo import MongoClient
# pprint library is used to make the output look more pretty
from pprint import pprint
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient('mongodb://localhost:27017')
db=client.admin

app = Flask(__name__)             # create an app instance

# for cors issue
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/mongoinput", methods=['GET', 'POST'])                   # at the end point /
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def hello():                      # call method hello

    console.log(request.docs)

    return 'success'

if __name__ == "__main__":        # on running python app.py
    app.run()                     # run the flask app