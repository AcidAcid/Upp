#!/usr/bin/python3
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.debug = True
    app.secret_key = b'\x17\xe0U*\x04\xba\xd5~\x9d\x8aHcC\xf7\x84\x96\x7fWQ\xc4\x0c\xd9\x0f\xe9'
    app.run(port=8080)
