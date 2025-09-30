import Currency from '../model/Currency';

type CreateProductRequest = {
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

export default CreateProductRequest;
