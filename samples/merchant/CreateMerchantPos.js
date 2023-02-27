const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  name: "my test pos",
  clientId: "client id",
  terminalId: "terminal id",
  threedsKey: "3d secure key",
  status: Craftgate.Model.PosStatus.Autopilot,
  currency: Craftgate.Model.Currency.TRY,
  orderNumber: 1,
  forceThreeDs: false,
  enableInstallment: true,
  enableForeignCard: true,
  enablePaymentWithoutCvc: true,
  posIntegrator: Craftgate.Model.PosIntegrator.Akbank,
  merchantPosUsers: [
    {
      posUsername: "username",
      posPassword: "password",
      posOperationType: Craftgate.Model.PosOperationType.Standard,
      posUserType: Craftgate.Model.PosUserType.Api
    }
  ]
};

craftgate.merchant().createMerchantPos(request)
  .then(result => console.info("Merchant pos successfully created", result))
  .catch(err => console.error("Failed to create merchant pos", err));
