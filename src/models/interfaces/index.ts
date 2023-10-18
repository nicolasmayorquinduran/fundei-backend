import { Context } from "koa";
import { HTTPMethodEnum } from "../enums";

// general
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

// google

export interface googleOAuthCredentialsInterface {
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
  expiry_date?: number;
}

// mercado pago

interface AddressPreferencesInterface {
  zip_code: string;
  street_name: string;
  street_number: string;
}

interface PhonePreferencesInterface {
  area_code: string;
  number: string;
}

interface PayerPreferencesInterface {
  name: string;
  surname: string;
  email: string;
  phone: PhonePreferencesInterface;
  address: AddressPreferencesInterface;
}

interface ItemPreferencesInterface {
  id: string;
  title: string;
  description: string;
  picture_url: string;
  category_id: string;
  quantity: number;
  currency_id: string;
  unit_price: number;
}

interface BackUrlsPreferencesInterface {
  success: string;
  pending: string;
  failure: string;
}

interface PaymentMethodsPreferencesInterface {
  excluded_payment_methods: { id: string }[];
  excluded_payment_types: { id: string }[];
  installments: number;
  default_installments: number;
}

export interface mercadopagoPreferencesInterface {
  items: ItemPreferencesInterface[];
  external_reference: string;
  payer: PayerPreferencesInterface;
  payment_methods: PaymentMethodsPreferencesInterface;
  back_urls: BackUrlsPreferencesInterface;
  notification_url: string;
  auto_return: string;
}
