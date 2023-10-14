/**
 * A set of functions called "actions" for `google`
 */

import { Context } from "koa";
import { controllerFunctionInterface } from "../../../models/interfaces";
const axios = require("axios");
import { customApisEnum, googleControllersEnum } from "../../../models/enums";

const { google } = require("googleapis");
const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } = process.env as Record<
  any,
  string
>;

export const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
export const drive = google.drive("v3");

const scopes = ["https://www.googleapis.com/auth/drive"];
// Generate a url that asks permissions for the Drive activity scope
const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
  include_granted_scopes: true,
});

let credentials: string | null = null;

const controllers: { [key: string]: controllerFunctionInterface<void> } = {
  authLogin: async (ctx: Context, next: () => Promise<any>): Promise<void> => {
    ctx.response.redirect(authorizationUrl);
  },
  authCallback: async (
    ctx: Context,
    next: () => Promise<any>
  ): Promise<void> => {
    try {
      const { code } = ctx.query;
      let { tokens } = await oauth2Client.getToken(code);
      ctx.body = tokens;
    } catch (error) {
      ctx.body = error;
    }
  },
  authRevokeToken: async (ctx: Context, next: () => Promise<any>) => {
    try {
      const postData = `token=${process.env.ACCESS_TOKEN}`;
      await axios.post("https://oauth2.googleapis.com/revoke", postData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      ctx.body = { message: "Token revocado exitosamente" };
    } catch (error) {
      ctx.body = { error };
    }
  },
};

export default controllers;
