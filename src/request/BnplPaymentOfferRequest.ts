import ApmType from '../model/ApmType';
import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';
import BnplPaymentCartItem from './dto/BnplPaymentCartItem';

type BnplPaymentOfferRequest = BaseRequest & {
  apmType: ApmType;
  merchantApmId: number;
  price: number;
  currency: Currency;
  apmOrderId: string;
  additionalParams?: Record<string, unknown>;
  items: BnplPaymentCartItem[];
};

export default BnplPaymentOfferRequest;
