const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const referenceId = "testReferenceId"

craftgate.juzdan().retrieveJuzdanPayment(referenceId)
  .then(result => console.info("Retrieve Juzdan payment is successful", result))
  .catch(err => console.error("Retrieve Juzdan payment failed", err));
