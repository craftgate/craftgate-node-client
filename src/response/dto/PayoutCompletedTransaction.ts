import Currency from '../../model/Currency';
import MerchantType from '../../model/MerchantType';
import SettlementEarningsDestination from '../../model/SettlementEarningsDestination';
import SettlementSource from '../../model/SettlementSource';

type PayoutCompletedTransaction = {
  payoutId: number;
  transactionId: number;
  transactionType: string;
  payoutAmount: number;
  payoutDate?: Date;
  currency: Currency;
  merchantId: number;
  merchantType: MerchantType;
  settlementEarningsDestination: SettlementEarningsDestination;
  settlementSource: SettlementSource;
};

export default PayoutCompletedTransaction;
