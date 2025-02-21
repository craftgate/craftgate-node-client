const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  status: true,
  message: "İşlem başarılı",
  ticketId: "7c0f7c89-e954-46d5-ad37-2a5c0b5f0356",
  bkmExpressPaymentToken: "23f4e147-2c4e-4a2c-8a67-9c783d813b79"
};

craftgate.bkmExpress().complete(request)
  .then(result => console.info("Bkm Express payment complete successful", result))
  .catch(err => console.error("Bkm Express payment complete failed", err));