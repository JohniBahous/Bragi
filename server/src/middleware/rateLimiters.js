import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

const publicLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 150,
});

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
});


export const presignLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 60,
});

export const publicSlowDown = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 150,
  delayMs: () => 500,
});