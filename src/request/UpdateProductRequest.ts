import Currency from '../model/Currency';
import Status from '../model/Status';

type UpdateProductRequest = {
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
};

export default UpdateProductRequest;
