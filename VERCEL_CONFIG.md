# Vercel Configuration Guide for Strata Portal

This document explains the configuration options used in our `vercel.json` file and how they enhance our Strata Management Portal application.

## Complete Configuration Options

```json
{
  "version": 2,
  "regions": ["syd1"],
  "framework": "nextjs",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "crons": [
    {
      "path": "/api/maintenance-reminder",
      "schedule": "0 9 * * MON"
    }
  ],
  "rewrites": [
    { "source": "/privacy", "destination": "/legal/privacy-policy" }
  ],
  "redirects": [
    { 
      "source": "/old-committee", 
      "destination": "/committee",
      "permanent": true
    }
  ]
}
```

## Detailed Configuration Options

### `version: 2`
Specifies the version of the Vercel platform configuration to use. Version 2 is the current standard for modern projects.

### `regions: ["syd1"]`
Defines the region(s) where our application is deployed:
- **Sydney, Australia** (`syd1`) - Chosen to minimize latency for Australian users
- Other options include `iad1` (Virginia, USA), `hnd1` (Tokyo, Japan), `lhr1` (London, UK)

**Use case:** For applications with a geographically specific audience, deploying to a nearby region reduces latency and improves user experience. For global applications, multiple regions can be specified.

### `buildCommand` and `installCommand`
- **buildCommand**: `"pnpm install --no-frozen-lockfile && next build"` - Specifies how to build the application
- **installCommand**: `"pnpm install"` - Defines the package installation command

**Use case:** Custom build commands are useful when your application requires special build steps beyond the defaults. For instance, if you need to generate assets, compile CSS, or run preprocessing steps.

### `framework: "nextjs"`
Tells Vercel that we're using Next.js framework, which enables Vercel-specific optimizations for Next.js including:
- Automatic route handling
- Optimized image components
- Static site generation optimizations

### `headers`
Custom HTTP headers applied to responses for security and performance:
- **Security headers**:
  - `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
  - `X-Frame-Options: DENY` - Prevents clickjacking attacks
  - `X-XSS-Protection: 1; mode=block` - Adds extra protection against cross-site scripting

**Use case:** Adding security headers helps protect your application from common web vulnerabilities and improves your site's security posture.

### `crons`
Scheduled tasks that run automatically at specified intervals:
- Our maintenance reminder runs every Monday at 9am (`0 9 * * MON`)
- Cron format: `minute hour day_of_month month day_of_week`

**Use case:** Cron jobs are excellent for:
1. Sending scheduled notifications
2. Database cleanup and maintenance
3. Generating reports on a regular schedule
4. Refreshing cached data

### `rewrites` and `redirects`
- **Rewrites**: Internally changes request paths without changing the URL in the browser
  - Example: `/privacy` routes to `/legal/privacy-policy` internally
  - **Use case:** Maintaining clean, user-friendly URLs while organizing content differently in your codebase

- **Redirects**: Changes the URL in the browser
  - Example: `/old-committee` redirects to `/committee`
  - `permanent: true` indicates a 301 (permanent) redirect rather than a 302 (temporary)
  - **Use case:** Handling moved pages, URL structure changes, or domain migrations while preserving SEO value

## Edge Functions vs Regular Serverless Functions

Our application uses Edge Functions for several API endpoints. Here's a detailed comparison:

### Edge Functions
- **Runtime Environment**: Runs at the edge of Vercel's network (global distribution)
- **Cold Start**: Minimal to none (<50ms)
- **Execution Time**: Limited to 5-30 seconds
- **Performance**: Very fast response times
- **Memory**: Limited (128MB-1GB)
- **Proximity to Users**: Closest possible (runs in many regions)
- **Use Cases**:
  - Simple API routes with global users
  - Data transformations
  - Authentication/Authorization
  - Scheduled tasks (cron jobs)
  - Content personalization

### Regular Serverless Functions
- **Runtime Environment**: Runs in specific cloud provider regions
- **Cold Start**: Can be 300ms-2s
- **Execution Time**: Up to 15 minutes
- **Performance**: Good but with potential cold starts
- **Memory**: Larger available (up to 3GB)
- **Proximity to Users**: Region-specific
- **Use Cases**:
  - Complex data processing
  - Database operations
  - Heavy computation
  - Integrations with third-party services
  - File processing

## Our Edge Functions Implementation

We've implemented three edge functions to support our Strata Portal:

1. **Notifications API** (`/api/notifications/route.js`):
   - Returns notifications for residents with location-based personalization
   - Benefits from edge deployment by reducing latency for global users

2. **Maintenance Request Handler** (`/api/maintenance-request/route.js`):
   - Demonstrates both POST (submission) and GET (status check) methods
   - Processes form submissions and returns appropriate HTTP status codes

3. **Maintenance Reminder** (`/api/maintenance-reminder/route.js`):
   - Scheduled via cron job to run every Monday
   - Sends maintenance reminders to residents
   - Ideal for edge functions due to the scheduled, lightweight nature

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