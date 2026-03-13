import type { MiddlewareHandler } from "hono";
import { CONFIG } from "../config/index.js";
import { safeCompare } from "./safeCompare.js";
import { Err } from "./errorHandler.js";

export const keyGuard: MiddlewareHandler = async (c, next) => {
   if (!CONFIG.API_KEY) {
      await next();
      return;
   }

   const requestKey = c.req.header("X-API-KEY");
   if (!requestKey || !safeCompare(requestKey, CONFIG.API_KEY)) {
      throw Err("You are not authorized to access this API.", 401);
   }

   await next();
};
