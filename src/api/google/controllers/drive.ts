/**
 * A set of functions called "actions" for `drive`
 */

export default {
  folders: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
