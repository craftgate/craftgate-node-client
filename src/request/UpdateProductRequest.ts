import Currency from '../model/Currency';
import Status from '../model/Status';

type UpdateProductRequest = {
  status: Status;
  name: string;
  channel: string;
  orderId: string;
  price: number;
  stock: number;
  currency: Currency;
  description: string;
  enabledInstallments: number[];
};

export default UpdateProductRequest;
