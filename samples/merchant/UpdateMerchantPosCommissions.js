const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "http://localhost:8000"
});

request = {
  commissions: [
    {
      installment: 1,
      blockageDay: 7,
      status: Craftgate.Model.Status.Active,
      cardBrandName: Craftgate.Model.CardBrand.Axess,
      installmentLabel: "Single installment",
      bankOnUsDebitCardCommissionRate: 1.0,
      bankOnUsCreditCardCommissionRate: 1.1,
      bankNotOnUsDebitCardCommissionRate: 1.2,
      bankNotOnUsCreditCardCommissionRate: 1.3,
      bankForeignCardCommissionRate: 1.5
    },
    {
      installment: 2,
      blockageDay: 7,
      status: Craftgate.Model.Status.Active,
      cardBrandName: Craftgate.Model.CardBrand.Axess,
      installmentLabel: "installment 2",
      bankOnUsCreditCardCommissionRate: 2.1,
      merchantCommissionRate: 2.3
    }
  ]
};

craftgate.merchant().updateMerchantPosCommissions(12, request)
  .then(result => console.info("Merchant pos commissions updated", result))
  .catch(err => console.error("Failed to update merchant pos commissions", err));