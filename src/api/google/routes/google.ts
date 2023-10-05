export default {
  routes: [
    {
      method: "GET",
      path: "/google",
      handler: "google.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
