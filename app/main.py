from flask import Flask, render_template, jsonify

app = Flask("ArcaneEngine")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/process_input", methods=["POST"])
def process_input():
    return jsonify({"message": "<b>DungeonMaster</b>: Hello there, Player!<br>"})