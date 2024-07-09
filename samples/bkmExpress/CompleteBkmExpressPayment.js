const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const request = {
  status: true,
  message: "İşlem başarılı",
  ticketId: "06fa9f84-ddf3-4ce4-91df-2f96139c8855"
};

craftgate.bkmExpress().complete(request)
  .then(result => console.info("Bkm Express payment complete successful", result))
  .catch(err => console.error("Bkm Express payment complete failed", err));
