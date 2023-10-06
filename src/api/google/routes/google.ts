import {
  googleControllers,
  customApis,
  HTTPMethod,
} from "../../../models/enums";
import { RouteConfig } from "../../../models/interfaces";

const routes: RouteConfig[] = [
  {
    method: HTTPMethod.GET,
    path: `/${customApis.google}/${googleControllers.auth}`,
    handler: `${googleControllers.auth}.authLogin`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

export default {
  routes,
};
