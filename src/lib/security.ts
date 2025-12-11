/**
 * Input Sanitization Utilities
 * Protect against XSS, SQL injection, and other injection attacks
 */

/**
 * Sanitize HTML input to prevent XSS attacks
 */
export function sanitizeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitize email addresses
 */
export function sanitizeEmail(email: string): string {
  // Basic email validation and sanitization
  const sanitized = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(sanitized)) {
    throw new Error('Invalid email format');
  }
  
  return sanitized;
}

/**
 * Sanitize phone numbers
 */
export function sanitizePhone(phone: string): string {
  // Remove all non-numeric characters except +
  const sanitized = phone.replace(/[^\d+]/g, '');
  
  if (sanitized.length < 10) {
    throw new Error('Invalid phone number');
  }
  
  return sanitized;
}

/**
 * Sanitize generic text input
 */
export function sanitizeText(input: string, maxLength: number = 1000): string {
  let sanitized = input.trim();
  
  // Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  // Remove potential SQL injection characters
  sanitized = sanitized.replace(/['";-]/g, '');
  
  // Remove control characters
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
  
  return sanitized;
}

/**
 * Validate and sanitize URL
 */
export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      throw new Error('Invalid URL protocol');
    }
    
    return parsed.toString();
  } catch {
    throw new Error('Invalid URL');
  }
}

/**
 * Sanitize file names
 */
export function sanitizeFilename(filename: string): string {
  // Remove path traversal attempts and special characters
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/\.{2,}/g, '.')
    .substring(0, 255);
}

/**
 * Rate limit key generator with sanitization
 */
export function generateRateLimitKey(identifier: string): string {
  return sanitizeText(identifier, 100)
    .replace(/[^a-zA-Z0-9_-]/g, '_');
}
