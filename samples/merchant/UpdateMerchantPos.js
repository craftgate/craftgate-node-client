const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  name: 'my new test pos',
  hostname: 'https://www.sanalakpos.com',
  clientId: 'client id',
  mode: 'P',
  path: '/fim/api',
  port: 443,
  threedsKey: '3d secure key',
  threedsPath: 'https://www.sanalakpos.com/fim/est3dgate',
  forceThreeDs: false,
  enableForeignCard: true,
  enableInstallment: true,
  enablePaymentWithoutCvc: true,
  newIntegration: false,
  orderNumber: 1,
  merchantPosUsers: [
    {
      id: 10,
      posUsername: 'username',
      posPassword: 'password',
      posUserType: 'API',
      posOperationType: 'STANDARD'
    }
  ],
  supportedCardAssociations: [ 'MASTER_CARD', 'VISA' ]
};

craftgate.merchant().updateMerchantPos(1, request)
  .then(result => console.info("Merchant pos successfully updated", result))
  .catch(err => console.error("Failed to update merchant pos", err));
