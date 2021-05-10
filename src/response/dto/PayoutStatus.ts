import TransactionPayoutStatus from '../../model/TransactionPayoutStatus';

type Payout = {
  merchantStatus: TransactionPayoutStatus;
  merchantStatusDate: Date;
  subMerchantMemberStatus: TransactionPayoutStatus;
  subMerchantMemberStatusDate: Date;
};

export default Payout;
