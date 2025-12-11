# Security Policy

## Enterprise-Grade Security Features

This application implements comprehensive security measures to protect against common web vulnerabilities and attacks.

### Security Headers

The following security headers are automatically applied to all responses:

- **X-Frame-Options**: `DENY` - Prevents clickjacking attacks
- **X-Content-Type-Options**: `nosniff` - Prevents MIME type sniffing
- **X-XSS-Protection**: `1; mode=block` - Enables browser XSS protection
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controls referrer information
- **Permissions-Policy**: Restricts access to sensitive browser features
- **Strict-Transport-Security**: Enforces HTTPS connections (HSTS)
- **Content-Security-Policy**: Comprehensive CSP to prevent XSS and data injection

### Content Security Policy (CSP)

Our CSP implementation restricts content sources and prevents unauthorized script execution:

- Scripts only from trusted sources (self, Google Analytics, Stripe)
- Styles from self and inline (with nonces where applicable)
- Images from HTTPS sources only
- No object/embed tags allowed
- Form actions restricted to self and Stripe
- Upgrade insecure requests to HTTPS

### Rate Limiting

API endpoints are protected with rate limiting:

- **Limit**: 100 requests per minute per IP
- **Window**: 60 seconds
- **Response**: 429 Too Many Requests with Retry-After header

### Input Sanitization

All user inputs are sanitized to prevent:

- Cross-Site Scripting (XSS)
- SQL Injection
- Command Injection
- Path Traversal
- LDAP Injection

Sanitization functions available:
- `sanitizeHtml()` - HTML content
- `sanitizeEmail()` - Email addresses
- `sanitizePhone()` - Phone numbers
- `sanitizeText()` - General text input
- `sanitizeUrl()` - URLs
- `sanitizeFilename()` - File names

### Protected Routes

The following routes have additional security measures:

- `/api/*` - Rate limiting, input validation
- `/admin/*` - Rate limiting, authentication required
- `/timesheet/*` - Password protection, rate limiting

### Environment Variables

Environment variables are validated at build time to ensure:

- Required variables are present
- URLs are properly formatted
- Sensitive data is not exposed to the client

### Security Best Practices

1. **HTTPS Only**: All connections must use HTTPS in production
2. **No Sensitive Data in Logs**: Sensitive information is never logged
3. **Secure Dependencies**: Regular dependency updates and security audits
4. **Password Hashing**: Passwords are never stored in plain text
5. **CORS**: Cross-Origin Resource Sharing is properly configured
6. **Session Management**: Secure session handling with httpOnly cookies

## Reporting Security Vulnerabilities

If you discover a security vulnerability, please report it to:

**Email**: adam@mendograss.com

**Response Time**: We aim to respond to security reports within 48 hours.

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

## Security Disclosure Policy

- We will acknowledge receipt of your report within 48 hours
- We will provide a detailed response within 7 days
- We will notify you when the issue is resolved
- We credit security researchers (with permission) in our security advisories

## Security Updates

This document is regularly updated as new security measures are implemented.

**Last Updated**: November 13, 2025

## Compliance

This application follows security best practices aligned with:

- OWASP Top 10 Web Application Security Risks
- OWASP API Security Top 10
- CWE/SANS Top 25 Most Dangerous Software Errors

## Security Checklist

- [x] HTTPS enforced via HSTS
- [x] Security headers implemented
- [x] Content Security Policy configured
- [x] Rate limiting on API routes
- [x] Input sanitization on all user inputs
- [x] XSS protection
- [x] SQL injection prevention
- [x] CSRF protection (Next.js built-in)
- [x] Clickjacking protection
- [x] Environment variable validation
- [x] Security.txt file published
- [x] Dependency vulnerability scanning
- [x] Error messages don't expose sensitive info

## Contact

For security concerns: adam@mendograss.com
For general inquiries: https://mendograss.com/contact
