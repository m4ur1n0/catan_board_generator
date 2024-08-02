#!/bin/bash

# Start the Python server
# python3.11 -m venv venv &
# source venv/bin/activate &
# pip install flask flask-cors &
# sleep 5 &
python3.11 server.py &

# Change to the catan_generator directory
cd catan_generator

# Start the npm development server
npm run dev &

# Wait for a few seconds to ensure the server starts
sleep 5

# Open the browser to the specified URL
# For Cygwin or Git Bash, use `xdg-open`, `cmd.exe`, or `explorer
open -a "Google Chrome" "http://localhost:5173/"
