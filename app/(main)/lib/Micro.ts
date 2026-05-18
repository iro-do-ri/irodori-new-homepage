import { createClient } from "microcms-js-sdk";

let _client: ReturnType<typeof createClient> | null = null;

export const client = {
  get: (...args: Parameters<ReturnType<typeof createClient>["get"]>) => {
    if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
      return Promise.resolve({ contents: [], totalCount: 0, offset: 0, limit: 100 });
    }
    if (!_client) {
      _client = createClient({
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
        apiKey: process.env.MICROCMS_API_KEY,
      });
    }
    return _client.get(...args);
  },
};