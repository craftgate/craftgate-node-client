const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.merchantApm().retrieveApms()
  .then(result => console.info("Merchant apm retrieved", result))
  .catch(err => console.error("Failed to retrieve merchant apm", err));