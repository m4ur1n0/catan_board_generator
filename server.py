from flask import Flask
from flask_cors import CORS  # Import CORS
import subprocess

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/run-script', methods=['GET'])
def run_script():
    try:
        result = subprocess.run(['python', 'test.py'], capture_output=True, text=True)
        return result.stdout, 200
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(port=5001)  # Choose a port for the Flask server
