/**
 * A set of functions called "actions" for `drive`
 */
const axios = require("axios");
const url = "https://www.googleapis.com/drive/v3/files";

export default {
  folders: async (ctx, next) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      ctx.body = response.data.files || response;
    } catch (err) {
      ctx.body = err;
    }
  },
};
