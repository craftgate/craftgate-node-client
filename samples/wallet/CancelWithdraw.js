const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

craftgate.wallet().cancelWithdraw(1)
  .then(result => console.info("Withdraw cancelled", result))
  .catch(err => console.error("Failed to cancel withdraw", err));
