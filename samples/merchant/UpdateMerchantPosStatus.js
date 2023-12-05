const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.merchant().updateMerchantPosStatus(11, Craftgate.Model.PosStatus.Passive)
  .then(result => console.info("Merchant pos status updated"))
  .catch(err => console.error("Failed to update merchant pos status", err));