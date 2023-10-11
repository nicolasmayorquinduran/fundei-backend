import { Context } from "aws-sdk/clients/autoscaling";
import { HTTPMethod } from "../enums";

export interface RouteConfig {
  method: HTTPMethod;
  path: string;
  handler: string;
  config: {
    policies: string[];
    middlewares: string[];
  };
}

export interface controllerFunction<T> {
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
