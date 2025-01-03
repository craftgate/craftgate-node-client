const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

craftgate.bkmExpress().retrievePaymentByToken("23f4e147-2c4e-4a2c-8a67-9c783d813b79")
  .then(result => console.info("Payment retrieve successful", result))
  .catch(err => console.error("Payment retrieve failed", err));

