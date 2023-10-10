/**
 * google service
 */

import { Context } from "koa";

export default {
  authLogin: async (ctx: Context, next: () => Promise<any>): Promise<void> => {
    try {
      ctx.body = { response: "test" };
    } catch (err) {
      ctx.body = err;
    }
  },
};
