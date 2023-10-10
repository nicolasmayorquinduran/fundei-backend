/**
 * A set of functions called "actions" for `docs`
 */

export default {
  detail: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
