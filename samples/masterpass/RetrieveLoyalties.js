const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  cardName: "YKB Test Kart",
  msisdn: "900000000000",
  binNumber: "404809"
};

craftgate.masterpass().retrieveLoyalties(request)
  .then(result => console.info("Retrieve loyalties successful", result))
  .catch(err => console.error("Retrieve loyalties failed", err));
