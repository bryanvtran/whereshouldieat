import io
import json
from yelp.client import Client
from yelp.oauth1_authenticator import Oauth1Authenticator
from random import randint

# finds results based on keyword and location
def search(keyword, location):
  with io.open('config_secret.json') as cred:
    creds = json.load(cred)
    auth = Oauth1Authenticator(**creds)
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
