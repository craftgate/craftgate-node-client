const Craftgate = require("../../dist");

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const merchantThreeDsCallbackKey = "merchantThreeDsCallbackKeySndbox";

const params = new Map();
params["hash"] = "1d3fa1e51fe7c350185c5a7f8c3ff513a991367b08c16a56f4ab9abeb738a1e1";
params["paymentId"] = "5";
params["conversationData"] = "conversation-data";
params["conversationId"] = "conversation-id";
params["status"] = "SUCCESS";
params["completeStatus"] = "WAITING";


craftgate.payment().is3DSecureCallbackVerified(merchantThreeDsCallbackKey, params)
  .then(result => console.info("Verify 3DSCallback is ", result));
