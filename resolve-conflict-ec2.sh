#!/bin/bash
# Script to resolve merge conflict on EC2

echo "🔧 Resolving merge conflict..."

# Remove the conflicted file (it was deleted in remote)
git rm quick-import.sh

# Stage the resolution
git add .

# Complete the merge
git commit -m "Resolve merge conflict: remove quick-import.sh"

echo "✅ Conflict resolved!"
echo ""
echo "📥 Now you can continue with deployment:"
echo "   docker-compose up -d --build frontend backend"



