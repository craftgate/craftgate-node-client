const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  memberId: 1,
  currency: Craftgate.Model.Currency.TRY,
  payoutStatus: Craftgate.Model.PayoutStatus.WaitingForPayout
};

craftgate.wallet().searchWithdraws(request)
  .then(result => console.info("Withdraw searched", result))
  .catch(err => console.error("Failed to search withdraw", err));
