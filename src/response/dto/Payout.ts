import Currency from '../../model/Currency';

type Payout = {
  paidPrice: number;
  parity: number;
  currency: Currency;
  merchantPayoutAmount: number;
  subMerchantMemberPayoutAmount: number;
};

export default Payout;
