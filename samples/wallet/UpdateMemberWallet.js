const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  negativeAmountLimit: -10
};

craftgate.wallet().updateMemberWallet(1, 1, request)
  .then(result => console.info("Member wallet updated", result))
  .catch(err => console.error("Failed to update member wallet", err));
