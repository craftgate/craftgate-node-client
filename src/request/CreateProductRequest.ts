import Currency from '../model/Currency';

type CreateProductRequest = {
  name: string;
  channel: string;
  price: number;
  stock: number;
  currency: Currency;
  description: string;
  enabledInstallments: number[];
};

export default CreateProductRequest;
