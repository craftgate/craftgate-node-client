import Currency from '../../model/Currency';
import MerchantType from '../../model/MerchantType';
import PayoutItemSubject from '../../model/PayoutItemSubject';
import TransactionPayoutStatus from '../../model/TransactionPayoutStatus';

type PayoutItem = {
  subject: PayoutItemSubject;
  subjectId: number;
  merchantType: MerchantType;
  merchantId: number;
  payoutAmount: number;
  currency: Currency;
  payoutStatus: TransactionPayoutStatus;
  payoutDate?: Date;
  createdDate: Date;
};

export default PayoutItem;
