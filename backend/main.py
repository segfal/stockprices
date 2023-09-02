from flask import Flask
from flask_cors import CORS
from finance import generate_stock


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/stock/<ticker>')
def stock(ticker):
    return generate_stock(ticker)


if __name__ == '__main__':
    app.run()

