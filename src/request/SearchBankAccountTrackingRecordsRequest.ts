import Currency from '../model/Currency';

type SearchBankAccountTrackingRecordsRequest = {
  senderName?: string;
  senderIban?: string;
  description?: string;
  currency?: Currency;
  minRecordDate?: Date;
  maxRecordDate?: Date;
  page?: number;
  size?: number;
};

export default SearchBankAccountTrackingRecordsRequest;
