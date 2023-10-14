import {
  googleControllersEnum,
  customApisEnum,
  HTTPMethodEnum,
} from "../../../models/enums";
import { RouteConfigInterface } from "../../../models/interfaces";

const routes: RouteConfigInterface[] = [
  {
    method: HTTPMethodEnum.GET,
    path: `/${customApisEnum.google}/${googleControllersEnum.auth}/login`,
    handler: `${googleControllersEnum.auth}.authLogin`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: HTTPMethodEnum.GET,
    path: `/${customApisEnum.google}/${googleControllersEnum.auth}/callback`,
    handler: `${googleControllersEnum.auth}.authCallback`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: HTTPMethodEnum.GET,
    path: `/${customApisEnum.google}/${googleControllersEnum.auth}/revokeToken`,
    handler: `${googleControllersEnum.auth}.authRevokeToken`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: HTTPMethodEnum.GET,
    path: `/${customApisEnum.google}/${googleControllersEnum.docs}`,
    handler: `${googleControllersEnum.docs}.detail`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
  {
    method: HTTPMethodEnum.GET,
    path: `/${customApisEnum.google}/${googleControllersEnum.drive}/folders`,
    handler: `${googleControllersEnum.drive}.folders`,
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

export default {
  routes,
};
