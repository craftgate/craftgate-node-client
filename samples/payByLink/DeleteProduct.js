const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

craftgate.payByLink().deleteProduct(1)
  .then(result => console.info("Product successfully deleted"))
  .catch(err => console.error("Delete product failed", err));
