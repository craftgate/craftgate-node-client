import Currency from '../model/Currency';
import Status from '../model/Status';

type ProductResponse = {
  id: number;
  name: string;
  description: string;
  status: Status;
  price: number;
  currency: Currency;
  stock: number;
  soldCount: number;
  token: string;
  enabledInstallments: number[];
  url: string;
  qrCodeUrl: string;
  channel: string;
};

export default ProductResponse;
