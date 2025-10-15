#!/bin/bash

# This script simulates Vercel's build environment
# It ensures the build works EXACTLY as it would on Vercel

echo "🔍 Testing Vercel build environment..."
echo ""

# Check Node version
echo "📦 Current Node version:"
node --version
echo ""

# Check if .nvmrc exists and Node version matches
if [ -f .nvmrc ]; then
  EXPECTED_NODE=$(cat .nvmrc)
  CURRENT_NODE=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
  
  if [ "$CURRENT_NODE" != "$EXPECTED_NODE" ]; then
    echo "❌ ERROR: Node version mismatch!"
    echo "   Expected: Node $EXPECTED_NODE.x (from .nvmrc)"
    echo "   Current:  Node $CURRENT_NODE.x"
    echo ""
    echo "💡 To fix this, run:"
    echo "   nvm use $EXPECTED_NODE"
    echo "   # or"
    echo "   nvm install $EXPECTED_NODE && nvm use $EXPECTED_NODE"
    echo ""
    exit 1
  fi
fi

# Clean build artifacts (like Vercel does)
echo "🧹 Cleaning previous build artifacts..."
rm -rf .next
echo ""

# Unset all Payload-related env vars (simulate Vercel without PAYLOAD_SECRET)
echo "🚫 Unsetting Payload environment variables (simulating Vercel without secrets)..."
unset PAYLOAD_SECRET
unset DATABASE_URI
unset MONGODB_URI
echo ""

# Install dependencies (like Vercel does)
echo "📥 Installing dependencies..."
pnpm install --frozen-lockfile
echo ""

# Run the build (like Vercel does)
echo "🏗️  Running production build..."
pnpm run build

# Check exit code
if [ $? -eq 0 ]; then
  echo ""
  echo "✅ SUCCESS! Build completed without errors"
  echo "🚀 This build will work on Vercel!"
  echo ""
  exit 0
else
  echo ""
  echo "❌ FAILURE! Build failed"
  echo "⚠️  Fix these errors before pushing to Vercel"
  echo ""
  exit 1
fi

