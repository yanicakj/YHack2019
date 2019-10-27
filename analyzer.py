from pymongo import MongoClient
# pprint library is used to make the output look more pretty
from pprint import pprint
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient('mongodb://localhost:27017')
db=client.admin
# Issue the serverStatus command and print the results
#serverStatusResult=db.command("serverStatus")
#pprint(serverStatusResult)

tweet = {
    'text':'Hi this is a new tweet from python!'
}

db = client.yhack2019
result = db.tweets.insert_one(tweet)

docs = db.tweets.find({})
for doc in docs:
    print(doc["text"])