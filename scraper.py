# General:
import tweepy           # To consume Twitter's API
import pandas as pd     # To handle data
import numpy as np      # For number computing
import requests
import json, ast

# We import our access keys:
from credentials import *    # This will allow us to use the keys as variables

# API's setup:
def twitter_setup():
    """
    Utility function to setup the Twitter's API
    with our access keys provided.
    """
    # Authentication and access using keys:
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)

    # Return API with authentication:
    global api 
    api = tweepy.API(auth)
    return api

extractor = twitter_setup()
#endpoint = 'https://api.twitter.com/1.1/search/tweets.json'
#cons_key_h = 'OAuth oauth_consumer_key="{CONSUMER_KEY}"'
#headers = {'Authorization': cons_key_h + ','}
#res = requests.get(endpoint + '?q=%23jetblue', headers=headers)

#tweets = extractor.user_timeline(screen_name="realDonaldTrump", count=200, tweet_mode='extended')
tweets = tweepy.Cursor(api.search, q='jetblue', tweet_mode='extended').items(1000000)

print('Loading tweets...')

#f = open("./tweets.txt","w+")
url = 'http://35.245.55.69:5000/mongoinput'

i = 1
for tweet in tweets:
    print('checking tweet' + str(i))
    i += 1
    #print tweet.created_at, tweet.text, tweet.lang
    newjson = ast.literal_eval(json.dumps(tweet.metadata)) 
    if newjson['iso_language_code'] == 'en':
        utf8string = tweet.full_text.encode("utf8")
        postObj = {'text':utf8string}
        requests.post(url, json = postObj)
        #print(utf8string)
        #utf8string = utf8string.replace('\n', '')
        #f.write(utf8string)

#f.close()
