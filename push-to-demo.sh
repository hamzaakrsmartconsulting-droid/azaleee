#!/bin/bash
# Script to push to GitHub demo repository

echo "🚀 Pushing to https://github.com/hamzalazigheb/demo"

# Check if demo remote exists
if ! git remote | grep -q "demo"; then
    echo "Adding demo remote..."
    git remote add demo https://github.com/hamzalazigheb/demo.git
fi

# Push current branch to demo repository
echo "Pushing current branch to demo repository..."
git push -u demo $(git branch --show-current)

echo "✅ Done! Your code is now at https://github.com/hamzalazigheb/demo"

