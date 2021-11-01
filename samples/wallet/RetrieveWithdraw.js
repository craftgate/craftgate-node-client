const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

// change withdraw id below with valid withdraw id
craftgate.wallet().retrieveWithdraw(1)
  .then(result => console.info("Withdraw retrieved", result))
  .catch(err => console.error("Failed to retrieve withdraw", err));
