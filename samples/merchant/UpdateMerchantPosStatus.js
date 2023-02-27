const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

craftgate.merchant().updateMerchantPosStatus(1, Craftgate.Model.PosStatus.Autopilot)
  .then(result => console.info("Merchant pos status successfully updated"))
  .catch(err => console.error("Failed to update merchant pos status", err));
