from flask import Flask, render_template, request
from yelplib import *

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('home.html')

@app.route('/', methods=['POST'])
def home_post():
  # getting input values
  text = request.form['text']
  location = request.form['location']
  if not text or not location:
    return render_template('home.html', result=None)

  # searching for results based on input
  results = search(text, location)
  if (results.total > 0):
    ret = randomize(results)
  else:
    ret = None;

  # return result
  return render_template('item.html', result=ret, text=text, location=location)

if __name__ == '__main__':
  app.run(debug=True)
