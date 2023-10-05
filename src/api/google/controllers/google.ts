/**
 * A set of functions called "actions" for `google`
 */

export default {
  exampleAction: async (ctx, next) => {
    try {
      const data = await strapi.service("api::google.google").find();
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
