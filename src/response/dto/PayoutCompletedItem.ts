import Currency from '../../model/Currency';
import MerchantType from '../../model/MerchantType';
import SettlementEarningsDestination from '../../model/SettlementEarningsDestination';
import SettlementRowItemSubject from '../../model/SettlementRowItemSubject';
import SettlementSource from '../../model/SettlementSource';

type PayoutCompletedItem = {
  settlementRowId: number;
  settlementFileId: number;
  subject: SettlementRowItemSubject;
  subjectId: number;
  paymentTransactionId?: number;
  merchantType: MerchantType;
  merchantId: number;
  payoutAmount: number;
  currency: Currency;
  payoutDate?: Date;
  settlementEarningsDestination: SettlementEarningsDestination;
  settlementSource: SettlementSource;
};

export default PayoutCompletedItem;
