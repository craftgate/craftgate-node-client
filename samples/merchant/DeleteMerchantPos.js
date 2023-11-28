const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.merchant().deleteMerchantPos(10)
  .then(result => console.info("Merchant pos deleted"))
  .catch(err => console.error("Failed to delete merchant pos", err));