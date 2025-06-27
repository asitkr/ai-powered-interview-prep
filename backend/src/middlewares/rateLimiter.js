import rateLimit from 'express-rate-limit';

// General limiter (e.g. for all routes)
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes.',
});

// Stricter limiter (e.g. for login or code execution)
export const sensitiveLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10,
  message: 'Too many attempts, please wait and try again.',
});