const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.merchant().retrieveMerchantPosCommissions(1)
  .then(result => console.info("Merchant pos commissions retrieved", result))
  .catch(err => console.error("Failed to retrieve merchant pos commissions", err));