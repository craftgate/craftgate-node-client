import BaseRequest from './BaseRequest';
import FraudCheckParameters from './dto/FraudCheckParameters';

type ExplicitCardInfo = {
  cardNumber: string;
  expireYear: string;
  expireMonth: string;
  cvc: string;
};

type StoredCardInfo = {
  cardUserKey: string;
  cardToken: string;
};

type SecureFieldsCardInfo = {
  secureFieldsToken: string;
};

type FraudCheckInfo = {
  clientIp?: string;
  conversationId?: string;
  fraudParams?: FraudCheckParameters;
};

type RetrieveLoyaltiesRequest = BaseRequest & (ExplicitCardInfo | StoredCardInfo | SecureFieldsCardInfo | FraudCheckInfo);

export default RetrieveLoyaltiesRequest;
