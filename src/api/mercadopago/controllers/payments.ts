/**
 * A set of functions called "actions" for `payments`
 */

import { Context } from "koa";
import Mercadopago from "mercadopago";
import { Payment } from "mercadopago";

const client = new Mercadopago({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
  options: { timeout: 0 },
});
const payment = new Payment(client);

const body = {
  transaction_amount: 12.0,
  description: "<DESCRIPTION>",
  payment_method_id: "pse",
  payer: {
    entity_type: "individual",
    email: "nmayorquinduran@gmail.com",
    identification: {
      type: "CPF",
      number: "95749019047",
    },
  },
  additional_info: {
    ip_address: "127.0.0.1",
  },
  callback_url: "http://localhost:1337/api/mercadopago/callback",
};

export default {
  pay: async (ctx: Context) => {
    try {
      ctx.body = await payment.create({ body });
    } catch (err) {
      console.log({ err: err.cause });

      ctx.body = err;
    }
  },
  callback: async (ctx: Context) => {
    try {
      ctx.body = { message: "paymentsuccesfully" };
    } catch (err) {
      ctx.body = err;
    }
  },
};
