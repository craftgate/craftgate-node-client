import SettlementRowItemSubject from '../../model/SettlementRowItemSubject';

type SettlementRowItem = {
  subject: SettlementRowItemSubject;
  subjectId: number;
  paymentTransactionId?: number;
  payoutAmount: number;
};

export default SettlementRowItem;
