const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  subMerchantMemberId: 1,
  subMerchantMemberPrice: 5
};

craftgate.payment().updatePaymentTransaction(10, request)
  .then(results => console.info("Payment transaction updated successfully", results))
  .catch(err => console.error("Failed to update payment transaction", err));
