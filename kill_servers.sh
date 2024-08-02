#!/bin/bash

# Kill all processes running 'npm run dev'
pkill -f 'npm run dev' &
pkill -f ' server.py' &

echo "Killed all processes running 'npm run dev' or 'server.py'"
