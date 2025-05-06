import {Loyalty} from '../model/Loyalty';
import MasterpassValidationType from '../model/MasterpassValidationType';

import MasterpassCreatePayment from './dto/MasterpassCreatePayment';

type MasterpassPaymentTokenGenerateRequest = {
  msisdn: string;
  userId: string;
  binNumber: string;
  forceThreeDS: boolean;
  createPayment: MasterpassCreatePayment;
  loyalty?: Loyalty;
  masterpassIntegrationVersion?: number;
  validationType?: MasterpassValidationType;
};

export default MasterpassPaymentTokenGenerateRequest;
