import {
  googleControllers,
  customApis,
  HTTPMethod,
} from "../../../models/enums";
import { RouteConfig } from "../../../models/interfaces";

const routes: RouteConfig[] = [
  {
    method: HTTPMethod.GET,
    path: `/${customApis.google}/${googleControllers.auth}/login`,
    handler: `${googleControllers.auth}.authLogin`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: HTTPMethod.GET,
    path: `/${customApis.google}/${googleControllers.auth}/callback`,
    handler: `${googleControllers.auth}.authCallback`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: HTTPMethod.GET,
    path: `/${customApis.google}/${googleControllers.auth}/revokeToken`,
    handler: `${googleControllers.auth}.authRevokeToken`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
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
