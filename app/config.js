/**
 * Application configuration
 * This file centralizes access to environment variables
 */

export const config = {
  // Site configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://strata-portal-v3.vercel.app',
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'StrataSphere Management Portal',
  
  // API configuration
  apiUrl: process.env.STRATA_API_URL || 'https://api.stratasphere.example.com',
  apiKey: process.env.API_KEY || '',
  
  // Email service configuration
  emailService: {
    apiKey: process.env.EMAIL_SERVICE_API_KEY || '',
    fromEmail: process.env.EMAIL_FROM || 'notifications@stratasphere.example.com',
  },
  
  // Feature flags
  features: {
    enableNotifications: process.env.ENABLE_NOTIFICATIONS === 'true',
    enablePayments: process.env.ENABLE_PAYMENTS === 'true',
    maintenanceMode: process.env.MAINTENANCE_MODE === 'true',
  },
  
  // Build information
  buildInfo: {
    version: process.env.NEXT_PUBLIC_VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  }
}; 