const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  currency: Craftgate.Model.Currency.TRY,
  page: 0,
  size: 10
};

craftgate.merchant().searchMerchantPos(request)
  .then(result => console.info("Merchant poses successfully searched", result))
  .catch(err => console.error("Failed to search merchant poses", err));
