const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  userId: "masterpass-user-id",
  msisdn: "900000000000",
  binNumber: "404308",
  forceThreeDS: false,
  createPayment: {
    price: 100.0,
    paidPrice: 100.0,
    installment: 1,
    conversationId: "456d1297-908e-4bd6-a13b-4be31a6e47d5",
    currency: Craftgate.Model.Currency.TRY,
    paymentGroup: Craftgate.Model.PaymentGroup.ListingOrSubscription,
    items: [
      {
        name: "Item 1",
        price: 30.0,
        externalId: "123d1297-839e-4bd6-a13b-4be31a6e12a8"
      },
      {
        name: "Item 2",
        price: 50.0,
        externalId: "789d1297-839e-4bd6-a13b-4be31a6e13f7"
      },
      {
        name: "Item 3",
        price: 20.0,
        externalId: "3a1d1297-839e-4bd6-a13b-4be31a6e18e6"
      }
    ]
  }
};

craftgate.masterpass().generateMasterpassPaymentToken(request)
  .then(result => console.info("Masterpass token generation successful", result))
  .catch(err => console.error("Masterpass token generation failed", err));
