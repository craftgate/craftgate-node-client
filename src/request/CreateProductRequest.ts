import Currency from '../model/Currency';
import Installment from '../model/Installment';
import PaymentGroup from '../model/PaymentGroup';
import PaymentPhase from '../model/PaymentPhase';

import {Card} from './dto/Card';
import PaymentItem from './dto/PaymentItem';

type CreateProductRequest = {
  name: string;
  channel: string;
  price: number;
  currency: Currency;
  description: string;
  enabledInstallments: number[];
};

export default CreateProductRequest;
