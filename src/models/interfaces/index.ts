import { Context } from "koa";
import { HTTPMethodEnum } from "../enums";

export interface RouteConfigInterface {
  method: HTTPMethodEnum;
  path: string;
  handler: string | Function;
  config: {
    policies: string[];
    middlewares: string[];
  };
}

export interface controllerFunctionInterface<T> {
  (ctx: Context, next: () => Promise<any>): Promise<T>;
}

export interface googleOAuthCredentialsInterface {
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
  expiry_date?: number;
}
