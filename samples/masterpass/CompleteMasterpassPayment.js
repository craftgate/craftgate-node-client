const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  referenceId: "referenceId",
  token: "token"
};

craftgate.masterpass().completeMasterpassPayment(request)
  .then(result => console.info("Payment successful", result))
  .catch(err => console.error("Payment failed", err));
