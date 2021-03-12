const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  memberId: 1,
  price: 100,
  description: "Hakediş Çekme Talebi",
  currency: Craftgate.Model.Currency.TRY
};

craftgate.wallet().createWithdraw(request)
  .then(result => console.info("Withdraw created", result))
  .catch(err => console.error("Failed to create withdraw", err));
