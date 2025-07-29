#!/bin/bash

# VM Deployment Script for test-static-repo-2
echo "Starting deployment process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! Starting the server..."
    echo "Server will be available at http://localhost:3000"
    echo "Use Ctrl+C to stop the server"
    npm start
else
    echo "Build failed! Please check the errors above."
    exit 1
fi
