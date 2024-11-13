from flask import Flask

app = Flask("ArcaneEngine")

@app.route("/")
def hello_world():
    return "<p>Hello from testing!</p>"