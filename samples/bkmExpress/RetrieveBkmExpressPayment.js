const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

craftgate.bkmExpress().retrievePayment("06fa9f84-ddf3-4ce4-91df-2f96139c8855")
  .then(result => console.info("Payment retrieve successful", result))
  .catch(err => console.error("Payment retrieve failed", err));
