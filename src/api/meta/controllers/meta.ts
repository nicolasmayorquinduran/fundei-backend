/**
 * A set of functions called "actions" for `meta`
 */

export default {
  sendMessage: async (ctx, next) => {
    try {
      ctx.body = ctx.request.body;
    } catch (err) {
      ctx.body = err;
    }
  },
};
