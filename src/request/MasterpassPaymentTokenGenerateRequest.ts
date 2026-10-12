import {Loyalty} from '../model/Loyalty';
import MasterpassValidationType from '../model/MasterpassValidationType';

import BaseRequest from './BaseRequest';
import MasterpassCreatePayment from './dto/MasterpassCreatePayment';

type MasterpassPaymentTokenGenerateRequest = BaseRequest & {
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
