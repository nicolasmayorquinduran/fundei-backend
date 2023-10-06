/**
 * A set of functions called "actions" for `google`
 */

import { Context } from "koa";
import { controllerFunction } from "../../../models/interfaces";
import { customApis, googleControllers } from "../../../models/enums";

const controllers: { [key: string]: controllerFunction<void> } = {
  authLogin: async (ctx: Context, next: () => Promise<any>): Promise<void> =>
    await strapi
      .service(`api::${customApis.google}.${googleControllers.auth}`)
      .authLogin(ctx, next),
};

export default controllers;
