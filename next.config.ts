import type { NextConfig } from 'next';

const securityHeaders = [
  // No indexing
  { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' },

  // Prevent embedding in iframes (clickjacking)
  { key: 'X-Frame-Options', value: 'DENY' },

  // Prevent MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },

  // No referrer info leaked when clicking WhatsApp links
  { key: 'Referrer-Policy', value: 'no-referrer' },

  // Force HTTPS for 2 years (set after confirming HTTPS works on your domain)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },

  // Disable browser APIs this page has no business using
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },

  // Content Security Policy — blocks XSS, external scripts, rogue iframes
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires these
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",                      // blob: for PDF/text download
      "connect-src 'self'",
      "frame-src 'none'",
      "frame-ancestors 'none'",                          // also blocks clickjacking at CSP level
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'none'",
      "upgrade-insecure-requests",                       // auto-upgrade HTTP → HTTPS
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
