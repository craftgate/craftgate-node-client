import Currency from '../model/Currency';
import Installment from '../model/Installment';

type SearchPaymentsRequest = {
  page?: number;
  size?: number;
  paymentId?: number;
  paymentTransactionId?: number;
  subMerchantMemberId?: number;
  buyerMemberId?: number;
  conversationId?: string;
  externalId?: string;
  orderId?: string;
  paymentType?: string;
  paymentStatus?: string;
  paymentSource?: string;
  binNumber?: string;
  lastFourDigits?: string;
  currency?: Currency;
  minPaidPrice?: number;
  maxPaidPrice?: number;
  installment?: Installment;
  isThreeDS?: boolean;
  minCreatedDate?: Date;
  maxCreatedDate?: Date;
};

export default SearchPaymentsRequest;
