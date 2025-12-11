/**
 * Environment Variable Validation
 * Ensures all required environment variables are present and valid
 */

const requiredEnvVars = [
  'NEXT_PUBLIC_GA_ID',
  'NEXT_PUBLIC_GTM_ID',
  'GOOGLE_SITE_VERIFICATION',
] as const;

const optionalEnvVars = [
  'NODE_ENV',
] as const;

export function validateEnv() {
  const missing: string[] = [];
  
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0 && process.env.NODE_ENV === 'production') {
    console.warn(
      `Warning: Missing environment variables: ${missing.join(', ')}`
    );
  }

  // Validate URL formats for public URLs
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    try {
      new URL(process.env.NEXT_PUBLIC_SITE_URL);
    } catch {
      throw new Error('NEXT_PUBLIC_SITE_URL must be a valid URL');
    }
  }
}

// Auto-validate on import (will run during build)
if (typeof window === 'undefined') {
  validateEnv();
}
