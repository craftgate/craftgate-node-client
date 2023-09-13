const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  paymentId: 1,
};

craftgate.masterpass().complete3DSMasterpassPayment(request)
  .then(result => console.info("Payment successful", result))
  .catch(err => console.error("Payment failed", err));
