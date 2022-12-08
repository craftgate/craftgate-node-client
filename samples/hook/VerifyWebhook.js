const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: "https://sandbox-api.craftgate.io"
});

const merchantHookKey = "Aoh7tReTybO6wOjBmOJFFsOR53SBojEp";
const incomingSignature = "0wRB5XqWJxwwPbn5Z9TcbHh8EGYFufSYTsRMB74N094=";

const webhookData = {
  eventType: Craftgate.Model.WebhookEventType.ApiVerifyAndAuth,
  eventTimestamp: 1661521221,
  status: Craftgate.Model.WebhookStatus.Success,
  payloadId: "584"
};

craftgate.hook().isWebhookVerified(merchantHookKey, incomingSignature, webhookData)
  .then(result => console.info("Verify webhook is ", result));
