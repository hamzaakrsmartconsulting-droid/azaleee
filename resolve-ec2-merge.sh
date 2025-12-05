#!/bin/bash
# Script to resolve merge conflicts on EC2

echo "🔧 Resolving merge conflicts..."

# Option 1: Stash local changes and pull
echo "📦 Stashing local changes..."
git stash

echo "📥 Pulling latest changes..."
git pull origin prod

echo "✅ Pull complete!"
echo ""
echo "💡 If you need your local changes back, run: git stash pop"
echo "   To discard local changes permanently, run: git stash drop"



