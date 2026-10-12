import Currency from '../model/Currency';

import BaseRequest from './BaseRequest';

type SearchBankAccountTrackingRecordsRequest = BaseRequest & {
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
