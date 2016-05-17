from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return "Starting project"

if __name__ == "__main__":
    app.debug = True
    app.run(port=8080)
