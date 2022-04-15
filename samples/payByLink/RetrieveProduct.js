const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

craftgate.payByLink().retrieveProduct(1)
  .then(result => console.info("Product successfully retrieved", result))
  .catch(err => console.error("Retrieve product failed", err));
