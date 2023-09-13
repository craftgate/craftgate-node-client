import MasterpassCreatePayment from './dto/MasterpassCreatePayment';

type MasterpassPaymentTokenGenerateRequest = {
  msisdn: string;
  userId: string;
  binNumber: string;
  forceThreeDS: boolean;
  createPayment: MasterpassCreatePayment;
};

export default MasterpassPaymentTokenGenerateRequest;
