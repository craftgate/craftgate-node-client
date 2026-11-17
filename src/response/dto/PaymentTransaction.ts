import TransactionStatus from '../../model/TransactionStatus';

type PaymentTransaction = {
  id: number;
  name: string;
  externalId: string;
  price: number;
  paidPrice: number;
  walletPrice: number;
  merchantCommissionRate: number;
  merchantCommissionRateAmount: number;
  subMerchantMemberId: number;
  subMerchantMemberPrice: number;
  transactionStatus: TransactionStatus;
  blockageResolvedDate: Date;
};

export default PaymentTransaction;
