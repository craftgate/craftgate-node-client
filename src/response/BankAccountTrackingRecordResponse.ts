import BankAccountTrackingSource from '../model/BankAccountTrackingSource';
import Currency from '../model/Currency';
import RecordType from '../model/RecordType';

type BankAccountTrackingRecordResponse = {
  id: number;
  key: string;
  senderName: string;
  senderIban: string;
  description: string;
  amount: number;
  currency: Currency;
  recordDate: Date;
  recordType: RecordType;
  bankAccountTrackingSource: BankAccountTrackingSource;
};

export default BankAccountTrackingRecordResponse;
