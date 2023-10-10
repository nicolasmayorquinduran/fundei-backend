import {
  googleControllers,
  customApis,
  HTTPMethod,
} from "../../../models/enums";
import { RouteConfig } from "../../../models/interfaces";

const routes: RouteConfig[] = [
  {
    method: HTTPMethod.GET,
    path: `/${customApis.google}/${googleControllers.docs}`,
    handler: `${googleControllers.docs}.detail`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: HTTPMethod.GET,
    path: `/${customApis.google}/${googleControllers.drive}/folders`,
    handler: `${googleControllers.drive}.folders`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

export default {
  routes,
};
