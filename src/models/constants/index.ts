const { SERVER_URL } = process.env;

interface Address {
  zip_code: string;
  street_name: string;
  street_number: string;
}

interface Phone {
  area_code: string;
  number: string;
}

interface Payer {
  name: string;
  surname: string;
  email: string;
  phone: Phone;
  address: Address;
}

interface Item {
  id: string;
  title: string;
  description: string;
  picture_url: string;
  category_id: string;
  quantity: number;
  currency_id: string;
  unit_price: number;
}

interface BackUrls {
  success: string;
  pending: string;
  failure: string;
}

interface PaymentMethods {
  excluded_payment_methods: { id: string }[];
  excluded_payment_types: { id: string }[];
  installments: number;
  default_installments: number;
}

export interface MockPreferences {
  items: Item[];
  external_reference: string;
  payer: Payer;
  payment_methods: PaymentMethods;
  back_urls: BackUrls;
  notification_url: string;
  auto_return: string;
}

const items: Item[] = [
  {
    id: "1234",
    title: "name",
    description: "Dispositivo movil de Tienda e-commerce",
    picture_url: "https://courseit.com.ar/static/logo.png",
    category_id: "1234",
    quantity: parseInt("2"),
    currency_id: "ARS",
    unit_price: parseFloat("100"),
  },
];

export const mockPreferences: MockPreferences = {
  items,
  external_reference: "referencia del negocio",
  payer: {
    name: "Lalo",
    surname: "Landa",
    email: "test_user_63274575@testuser.com",
    phone: {
      area_code: "11",
      number: "22223333",
    },
    address: {
      zip_code: "1111",
      street_name: "False",
      street_number: "123",
    },
  },
  payment_methods: {
    excluded_payment_methods: [
      {
        id: "amex",
      },
    ],
    excluded_payment_types: [{ id: "atm" }],
    installments: 6,
    default_installments: 6,
  },
  back_urls: {
    success: `${SERVER_URL}/success`,
    pending: `${SERVER_URL}.com/pending`,
    failure: `${SERVER_URL}.com/error`,
  },
  notification_url: "https://mercadopago-checkout.herokuapp.com/webhook",
  auto_return: "approved",
};
