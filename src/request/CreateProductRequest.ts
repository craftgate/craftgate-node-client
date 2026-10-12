import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type CreateProductRequest = BaseRequest & {
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
  forceThreeDS: boolean;
  enabledInstallments: number[];
  expiresAt: string;
  basketIdentifier: string;
};

export default CreateProductRequest;
