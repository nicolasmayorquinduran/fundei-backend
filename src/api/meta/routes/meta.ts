import {
  HTTPMethodEnum,
  customApisEnum,
  metaControllersEnum,
} from "../../../models/enums";
import { RouteConfigInterface } from "../../../models/interfaces";

const routes: RouteConfigInterface[] = [
  {
    method: HTTPMethodEnum.POST,
    path: `/${customApisEnum.meta}/${metaControllersEnum.whatsapp}`,
    handler: `${customApisEnum.meta}.sendMessage`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

export default {
  routes,
};
