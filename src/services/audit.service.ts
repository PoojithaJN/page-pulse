import axios from "axios";
import * as cheerio from "cheerio";
import pLimit from "p-limit";

import { config } from "../config/config";
import { cache } from "../cache/cache";

const limit = pLimit(config.concurrencyLimit);

export const auditWebsite = async (url: string) => {
  return limit(async () => {
    // Check cache first
    const cached = cache.get(url);

    if (cached) {
      return {
        ...(cached as object),
        cached: true,
      };
    }

    const start = Date.now();

    try {
      const response = await axios.get(url, {
        timeout: config.requestTimeout,
        maxRedirects: 5,
      });

      const responseTime = Date.now() - start;

      const $ = cheerio.load(response.data);

      const result = {
        url,
        status: response.status,
        responseTime,
        title: $("title").text() || "No title found",
        contentLength: JSON.stringify(response.data).length,
        headers: response.headers,
      };

      // Save to cache
      cache.set(url, result);

      return {
        ...result,
        cached: false,
      };
    } catch (error: any) {
      if (error.code === "ECONNABORTED") {
        throw {
          status: 408,
          code: "REQUEST_TIMEOUT",
          message: "The target website timed out.",
        };
      }

      throw {
        status: 500,
        code: "AUDIT_FAILED",
        message: error.message || "Unable to audit the URL.",
      };
    }
  });
};