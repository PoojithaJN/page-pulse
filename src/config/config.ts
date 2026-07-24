import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 3000,
  cacheTTL: Number(process.env.CACHE_TTL) || 300,
  requestTimeout: Number(process.env.REQUEST_TIMEOUT) || 5000,
  concurrencyLimit: Number(process.env.CONCURRENCY_LIMIT) || 10,
  rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60000,
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX) || 20,
};