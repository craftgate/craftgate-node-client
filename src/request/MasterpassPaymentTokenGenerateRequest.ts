import {Loyalty} from '../model/Loyalty';

import MasterpassCreatePayment from './dto/MasterpassCreatePayment';

type MasterpassPaymentTokenGenerateRequest = {
  msisdn: string;
  userId: string;
  binNumber: string;
  forceThreeDS: boolean;
  createPayment: MasterpassCreatePayment;
  loyalty: Loyalty;
};

export default MasterpassPaymentTokenGenerateRequest;
