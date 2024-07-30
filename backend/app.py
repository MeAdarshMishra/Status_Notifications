from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Mock data for flights
mock_flights = [
    {"id": 1, "airline": "Indigo", "status": "On Time", "gate": "A1"},
    {"id": 1, "airline": "Indigo", "status": "On Time", "gate": "A2"},
    {"id": 1, "airline": "Indigo", "status": "On Time", "gate": "A3"},
    {"id": 1, "airline": "Indigo", "status": "On Time", "gate": "B1"},
    {"id": 1, "airline": "Indigo", "status": "On Time", "gate": "B2"},
    {"id": 2, "airline": "Indigo", "status": "Delayed", "gate": "B3"}
]

@app.route('/api/flights', methods=['GET'])
def get_flights():
    return jsonify(mock_flights)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
