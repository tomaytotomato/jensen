#!/bin/bash

# Jensen Theme Website - Quick Start Script
# This script helps you quickly start developing or preview the website

set -e

echo "🎮 Jensen Theme Website Helper"
echo "================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
    echo ""
fi

# Show menu
echo "Choose an option:"
echo "1) Start development server (npm run dev)"
echo "2) Build for production (npm run build)"
echo "3) Preview production build (npm run preview)"
echo "4) Build and preview"
echo ""
read -p "Enter choice [1-4]: " choice

case $choice in
    1)
        echo "🚀 Starting development server..."
        echo "Visit: http://localhost:5173"
        npm run dev
        ;;
    2)
        echo "🔨 Building for production..."
        npm run build
        echo "✅ Build complete! Check the dist/ folder"
        ;;
    3)
        echo "👁️  Starting preview server..."
        echo "Visit: http://localhost:4173"
        npm run preview
        ;;
    4)
        echo "🔨 Building for production..."
        npm run build
        echo "✅ Build complete!"
        echo ""
        echo "👁️  Starting preview server..."
        echo "Visit: http://localhost:4173"
        npm run preview
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

