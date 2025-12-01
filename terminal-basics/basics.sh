#!/bin/bash

echo "=== Basic Shell Commands Demo ==="

# Display current working directory
echo "Current Directory:"
pwd

# Show current user
echo "Current User:"
whoami

echo "=== Navigating File System ==="

# Navigate to home directory
cd ~
echo "Moved to Home Directory:"
pwd

echo "=== Listing Files ==="
ls

echo "=== File & Directory Operations ==="

# Create a file
echo "Creating a file named sample.txt"
touch sample.txt

# Create directory
echo "Creating a directory named demo_folder"
mkdir demo_folder

# Copy file
echo "Copying sample.txt to demo_folder"
cp sample.txt demo_folder/

# Move file
echo "Moving sample.txt to demo_folder and renaming"
mv demo_folder/sample.txt demo_folder/renamed.txt

# Delete file
echo "Deleting renamed.txt"
rm demo_folder/renamed.txt

# Remove directory
echo "Removing demo_folder"
rmdir demo_folder

echo "=== Script Completed ==="
