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

type RetrieveLoyaltiesRequest = ExplicitCardInfo | StoredCardInfo;

export default RetrieveLoyaltiesRequest;
