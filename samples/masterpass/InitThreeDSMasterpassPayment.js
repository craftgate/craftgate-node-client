const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  referenceId: "referenceId",
  callbackUrl: "https://www.your-website.com/craftgate-3DSecure-callback"
};

craftgate.masterpass().init3DSMasterpassPayment(request)
  .then(result => console.info("3DS init successful", result))
  .catch(err => console.error("3DS init failed", err));
