const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  name: "newMerchant",
  legalCompanyTitle: "legalCompanyTitle",
  email: "new_merchant@merchant.com",
  website: "www.merchant.com",
  contactName: "newName",
  contactSurname: "newSurname",
  contactPhoneNumber: "905555555566"
};

craftgate.onboarding().createMerchant(request)
  .then(result => console.info("Merchant created", result))
  .catch(err => console.error("Failed to create merchant", err));
