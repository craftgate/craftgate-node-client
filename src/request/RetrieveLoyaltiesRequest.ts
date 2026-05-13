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

type FraudCheckInfo = {
  clientIp?: string;
  conversationId?: string;
  fraudParams?: FraudCheckParameters;
};

type RetrieveLoyaltiesRequest = ExplicitCardInfo | StoredCardInfo | FraudCheckInfo;

export default RetrieveLoyaltiesRequest;
