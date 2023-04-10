import ApmAdditionalAction from '../model/ApmAdditionalAction';
import PaymentStatus from '../model/PaymentStatus';

import PaymentError from './dto/PaymentError';
import WalletTransaction from './dto/WalletTransaction';

type ApmDepositPaymentResponse = {
  paymentId: number;
  redirectUrl: string;
  paymentStatus: PaymentStatus;
  additionalAction: ApmAdditionalAction;
  paymentError: PaymentError;
  walletTransaction: WalletTransaction;
};

export default ApmDepositPaymentResponse;
