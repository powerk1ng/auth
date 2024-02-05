import rateLimit from "express-rate-limit";

// Rate limit middleware
export const rateLimitMiddleware = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    message: "You have exceeded your 5 requests per minute limit.",
    success: false,
    statusCode: 429
  },
  headers: true,
});

