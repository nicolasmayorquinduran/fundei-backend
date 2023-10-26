const { SERVER_URL } = process.env;

const items = [
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

export const mockPreferences = {
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
