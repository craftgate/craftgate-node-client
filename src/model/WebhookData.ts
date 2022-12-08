import WebhookEventType from './WebhookEventType';
import WebhookStatus from './WebhookStatus';

type PaymentItem = {
  eventType: WebhookEventType;
  eventTime: Date;
  eventTimestamp: number;
  status: WebhookStatus;
  payloadId: string;
};

export default PaymentItem;
