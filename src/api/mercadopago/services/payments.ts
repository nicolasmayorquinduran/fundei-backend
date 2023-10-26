/**
 * mercadopago service
 */

import { mercadopagoPreferencesInterface } from "../../../models/interfaces";

const axios = require("axios");
const { MERCADOPAGO_ACCESS_TOKEN, SERVER_URL } = process.env;

export default {
  pay: async (ctx, next: () => Promise<any>): Promise<void> => {
    try {
      const tokensMercadoPago = {
        prod: {},
        test: {
          access_token: MERCADOPAGO_ACCESS_TOKEN,
        },
      };
      const mercadoPagoUrl = "https://api.mercadopago.com/checkout";
      const url = `${mercadoPagoUrl}/preferences?access_token=${tokensMercadoPago.test.access_token}`;
      const preferences: mercadopagoPreferencesInterface = {
        ...ctx.request.body,
        back_urls: {
          success: `${SERVER_URL}/success`,
          pending: `${SERVER_URL}.com/pending`,
          failure: `${SERVER_URL}.com/error`,
        },
        notification_url: "https://mercadopago-checkout.herokuapp.com/webhook",
        auto_return: "approved",
      };
      return await axios.post(url, preferences, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      ctx.body = err;
    }
  },
};
