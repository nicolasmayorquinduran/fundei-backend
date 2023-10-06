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
