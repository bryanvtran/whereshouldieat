import os
from yelp.client import Client
from yelp.oauth1_authenticator import Oauth1Authenticator
from random import randint

# finds results based on keyword and location
def search(keyword, location):
  auth = Oauth1Authenticator(
      consumer_key=os.environ['CONSUMER_KEY'],
      consumer_secret=os.environ['CONSUMER_SECRET'],
      token=os.environ['TOKEN'],
      token_secret=os.environ['TOKEN_SECRET']
  )

  client = Client(auth)

  params = {
      'term': keyword,
      'lang': 'en',
      'sort': 2
  }

  response = client.search(location, **params)
  return response

def randomize(results):
  # todo: remove old results
  i = randint(0, len(results.businesses)-1)
  return results.businesses[i]
