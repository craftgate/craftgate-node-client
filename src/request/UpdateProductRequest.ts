import Currency from '../model/Currency';
import Status from '../model/Status';

import BaseRequest from './BaseRequest';

type UpdateProductRequest = BaseRequest & {
  status: Status;
  name: string;
  channel: string;
  orderId: string;
  conversationId: string;
  externalId: string;
  price: number;
  stock: number;
  currency: Currency;
  description: string;
  multiPayment: boolean;
  enabledInstallments: number[];
  expiresAt: string;
  basketIdentifier: string;
};

export default UpdateProductRequest;
