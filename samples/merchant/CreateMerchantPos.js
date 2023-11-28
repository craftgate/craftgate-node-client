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
  enableInstallment: true,
  enableForeignCard: true,
  enablePaymentWithoutCvc: true,
  posIntegrator: Craftgate.Model.PosIntegrator.AKBANK,
  enabledPaymentAuthenticationTypes: [Craftgate.Model.PaymentAuthenticationType.ThreeDs, Craftgate.Model.PaymentAuthenticationType.NonThreeDs],
  merchantPosUsers: [{
    posOperationType: Craftgate.Model.PosOperationType.Stantard,
    posUserType: Craftgate.Model.PosUserType.API,
    posUsername: "username",
    posPassword: "password"
  }]
};

craftgate.merchant().createMerchantPos(request)
  .then(result => console.info("Merchant pos created", result))
  .catch(err => console.error("Failed to create merchant pos", err));