# Vercel Configuration Guide

This document explains the configuration options used in our `vercel.json` file and how they enhance our Strata Management Portal.

## Configuration Options

### `version: 2`
Specifies the version of the Vercel platform configuration to use. Version 2 is the current standard.

### `regions: ["syd1"]`
Defines the region(s) where our application is deployed:
- **Sydney, Australia** (`syd1`) - Chosen to minimize latency for Australian users
- We could add more regions like `iad1` (Virginia, USA) or `hnd1` (Tokyo, Japan) for a more global presence

### `buildCommand` and `installCommand`
- **buildCommand**: `"pnpm install --no-frozen-lockfile && next build"` - Specifies how to build the application
- **installCommand**: `"pnpm install"` - Defines the package installation command

### `framework: "nextjs"`
Tells Vercel that we're using Next.js framework, which enables Vercel-specific optimizations for Next.js.

### `headers`
Custom HTTP headers applied to responses:
- **Security headers** on all routes (`nosniff`, `DENY`, `XSS-Protection`)
- **Cache control** on API routes to prevent caching

### `crons`
Scheduled tasks that run automatically:
- Our maintenance reminder runs every Monday at 9am (`0 9 * * MON`)
- Cron jobs are useful for recurring tasks like sending notifications, generating reports, or cleaning up databases

### `rewrites` and `redirects`
- **Rewrites**: Internally changes request paths without changing the URL in the browser
  - Example: `/privacy` routes to `/legal/privacy-policy` internally
- **Redirects**: Changes the URL in the browser
  - Example: `/old-committee` redirects to `/committee`
  - `permanent: true` indicates a 301 (permanent) redirect rather than a 302 (temporary)

## Edge Functions vs Regular Serverless Functions

Our application uses Edge Functions for several API endpoints:

### Edge Functions
- Run closer to users in global edge locations
- Have faster cold start times
- Limited in complexity and runtime
- Great for:
  - API routes with global users
  - Simple data transformations
  - Scheduled tasks (cron jobs)

### Regular Serverless Functions
- Run in specific regions
- Can be more complex and computationally intensive
- Have access to more runtime features
- Better for:
  - Complex processing
  - Database operations
  - Heavy computation

## Environment Variables

Environment variables are configured in the Vercel dashboard:
1. Go to Project Settings > Environment Variables
2. Add variables like API keys, database URLs, and feature flags
3. Specify which environments (Production, Preview, Development) each variable applies to

See `.env.example` for the variables used in this project.

## Deployment Workflow

Our repository is connected to Vercel with the following workflow:
1. Push to `main` branch → Production deployment
2. Create a pull request → Preview deployment
3. Merge PR → Automatic update to production 