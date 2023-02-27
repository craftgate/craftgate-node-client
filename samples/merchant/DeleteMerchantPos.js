const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'http://localhost:8000'
});

craftgate.merchant().deleteMerchantPos(1)
  .then(result => console.info("Merchant pos successfully deleted"))
  .catch(err => console.error("Failed to delete merchant pos", err));
