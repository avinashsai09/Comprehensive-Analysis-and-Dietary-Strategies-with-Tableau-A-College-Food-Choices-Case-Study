import csv
import os
from pathlib import Path

from flask import Flask, render_template

app = Flask(__name__)
DATA_FILE = Path(__file__).parent / "data" / "college_food_choices_final.csv"


def load_dashboard_rows():
    with DATA_FILE.open(newline="", encoding="utf-8") as file:
        return list(csv.DictReader(file))


@app.route("/")
def home():
    return render_template("index.html", dashboard_rows=load_dashboard_rows())


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
