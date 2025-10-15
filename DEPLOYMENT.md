# Deployment Guide

## Prerequisites

- Node.js 20.x (locked in `.nvmrc` and `package.json`)
- pnpm package manager
- Vercel account

## Local Build Test

**Always test the build locally before deploying to Vercel:**

```bash
# Install dependencies
pnpm install

# Run production build
pnpm run build

# Test production server
pnpm start
```

✅ **The build must succeed locally before pushing to Vercel!**

## Environment Variables

### Required for Vercel

Create these in your Vercel project settings:

1. **PAYLOAD_SECRET** (required for Payload CMS)
   - Generate with: `openssl rand -base64 32`
   - Or use any secure random string

2. **DATABASE_URI** (if using MongoDB)
   - Example: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`

3. **NEXT_PUBLIC_API_URL** (optional)
   - Your domain URL
   - Example: `https://yourdomain.vercel.app`

### Local Development

Create a `.env` file (already in `.gitignore`):

```env
PAYLOAD_SECRET=your-local-secret-key
DATABASE_URI=mongodb://localhost:27017/sonja-portfolio
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Vercel Deployment

### Option 1: Automatic (Git Integration)

1. Push to GitHub
2. Vercel automatically deploys from `main` branch
3. Monitor build logs in Vercel dashboard

### Option 2: Manual (CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Current Status

### ✅ Active Pages
- `/` - Homepage (Hero, About, Contact, Footer)
- `/impressum` - Legal notice
- `/datenschutz` - Privacy policy

### ⚠️ Disabled Pages (require PAYLOAD_SECRET)
All e-commerce and authentication pages are temporarily disabled:
- `/shop`, `/products/*`, `/checkout/*`
- `/account`, `/orders`, `/login`, `/create-account`

**To re-enable:** Set `PAYLOAD_SECRET` in Vercel environment variables and update the page files.

## Troubleshooting

### Build fails on Vercel but works locally

1. **Check Node version:**
   - Vercel should use Node 20.x (set in `.nvmrc`)
   - Verify in build logs

2. **Check environment variables:**
   - Ensure all required env vars are set in Vercel dashboard
   - Variables are case-sensitive

3. **Check lockfile:**
   - Vercel uses `pnpm-lock.yaml`
   - If modified, commit it before deploying

### Build takes too long / times out

- Current config uses `--max-old-space-size=8000`
- Vercel has build time limits (10 min for Pro, 45 min for Enterprise)
- Consider upgrading plan or optimizing bundle size

## Build Configuration

Files that control the build:

- `vercel.json` - Vercel-specific config
- `.nvmrc` - Locks Node version to 20.x
- `next.config.js` - Next.js configuration
- `package.json` - Scripts and dependencies

## Support

If deployment fails:
1. Check build logs in Vercel dashboard
2. Run `pnpm run build` locally first
3. Ensure environment variables are set
4. Check Node version matches `.nvmrc`

