/**
 * A set of functions called "actions" for `payments`
 */
import {
  customApisEnum,
  mercadopagoControllersEnum,
} from "../../../models/enums";

export default {
  pay: async (ctx: Record<any, any>) => {
    try {
      const { data } = await strapi
        .service(
          `api::${customApisEnum.mercadopago}.${mercadopagoControllersEnum.payments}`
        )
        .pay(ctx);
      ctx.body = data.init_point;
    } catch (err) {
      console.log({ err: err });
      ctx.body = err;
    }
  },
  callback: async (ctx) => {
    try {
      ctx.body = { message: "paymentsuccesfully" };
    } catch (err) {
      ctx.body = err;
    }
  },
};
