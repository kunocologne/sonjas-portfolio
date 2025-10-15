# How to Test Builds EXACTLY Like Vercel

## The Problem

Running `pnpm run build` locally might succeed even when Vercel fails because:

1. **Different Node versions** - You might be on Node 24, Vercel uses Node 20
2. **Different environment variables** - You have `.env` locally, Vercel might not
3. **Cached builds** - Old `.next` folder can mask issues
4. **Different dependencies** - Local installs vs Vercel's fresh install

## The Solution

### Use the Vercel Build Simulator

```bash
pnpm run build:vercel
```

This script **exactly simulates** Vercel's build process:

✅ Checks Node version matches `.nvmrc` (Node 20.x)  
✅ Cleans `.next` folder (fresh build)  
✅ Removes Payload env vars (simulates missing `PAYLOAD_SECRET`)  
✅ Installs with frozen lockfile (exact dependencies)  
✅ Runs production build

### Before Pushing to Vercel

**ALWAYS run this checklist:**

```bash
# 1. Switch to Node 20 (if using nvm)
nvm use 20

# 2. Run Vercel simulation
pnpm run build:vercel

# 3. If it succeeds, you're good to push!
git push origin main
```

## Setting Up Node 20

If you don't have Node 20 installed:

```bash
# Install Node 20
nvm install 20

# Use Node 20
nvm use 20

# Verify
node --version  # Should show v20.x.x
```

### Make Node 20 Default (Optional)

To automatically use Node 20 when entering this project:

```bash
# The .nvmrc file already exists with "20"
# Just run this in the project directory:
nvm use
```

## Quick Reference

| Command | What it does |
|---------|--------------|
| `pnpm run build` | Regular build (might not match Vercel) |
| `pnpm run build:vercel` | **Simulates Vercel build** (use this!) |
| `nvm use 20` | Switch to Node 20 |
| `pnpm run dev` | Start dev server |

## Why This Matters

**Without this script:**
- ❌ Build succeeds locally
- ❌ Push to Vercel
- ❌ Vercel fails with cryptic errors
- ❌ Repeat 30 times

**With this script:**
- ✅ Test locally first
- ✅ Fix issues before pushing
- ✅ Push to Vercel
- ✅ Deployment succeeds!

## Current Build Status

Run `pnpm run build:vercel` to check if your current code will work on Vercel.

If it fails:
1. Read the error message
2. Fix the issue
3. Run `pnpm run build:vercel` again
4. Repeat until it succeeds
5. **Then** push to Vercel

---

💡 **Pro tip:** Always run `pnpm run build:vercel` before committing changes that could affect the build.

