import {
  HTTPMethodEnum,
  customApisEnum,
  mercadopagoControllersEnum,
} from "../../../models/enums";
import { RouteConfigInterface } from "../../../models/interfaces";

const routes: RouteConfigInterface[] = [
  {
    method: HTTPMethodEnum.POST,
    path: `/${customApisEnum.mercadopago}/${mercadopagoControllersEnum.payments}`,
    handler: `${mercadopagoControllersEnum.payments}.pay`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: HTTPMethodEnum.GET,
    path: `/${customApisEnum.mercadopago}/${mercadopagoControllersEnum.payments}/callback`,
    handler: `${mercadopagoControllersEnum.payments}.callback`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

export default {
  routes,
};
