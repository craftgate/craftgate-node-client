const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  price: 100.0,
  paidPrice: 100.0,
  currency: Craftgate.Model.Currency.TRY,
  paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  externalId: 'testExternalId',
  callbackUrl: 'https://www.your-website.com/juzdan-payment-callback',
  paymentPhase: Craftgate.Model.PaymentPhase.Auth,
  paymentChannel: 'testPaymentChannel',
  bankOrderId: 'testBankOrderID',
  items: [
    {
      name: 'Item 1',
      price: 30.0,
      externalId: '123d1297-839e-4bd6-a13b-4be31a6e12a8'
    }
  ],
  clientType: Craftgate.Model.ClientType.W,
  loanCampaignId: 1
};

craftgate.juzdan().initJuzdanPayment(request)
  .then(result => console.info("Juzdan Payment init successful, qrUrl is generated", result))
  .catch(err => console.error("Juzdan Payment init failed", err));
