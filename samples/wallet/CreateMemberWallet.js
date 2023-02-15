const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  negativeAmountLimit: 0,
  currency: Craftgate.Model.Currency.TRY
};

craftgate.wallet().createMemberWallet(1, request)
  .then(result => console.info("Member wallet created", result))
  .catch(err => console.error("Failed to create member wallet", err));
