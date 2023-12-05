const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.merchant().retrieveMerchantPos(1)
  .then(result => console.info("Merchant pos retrieved", result))
  .catch(err => console.error("Failed to retrieve merchant pos", err));