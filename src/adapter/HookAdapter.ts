import {ClientCreationOptions} from '../lib/HttpClient';
import {calculateWebhookSignature} from '../lib/utils';
import WebhookData from '../model/WebhookData';

import BaseAdapter from './BaseAdapter';

export default class HookAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async isWebhookVerified(merchantHookKey: string, incomingSignature: string, webhookData: WebhookData): Promise<boolean> {
    const hashString = webhookData.eventType + webhookData.eventTimestamp + webhookData.status + webhookData.payloadId;
    const signature = calculateWebhookSignature(merchantHookKey, hashString);
    return incomingSignature == signature;
  }
}
