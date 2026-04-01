type VerifyCard = {
  cardHolderName: string;
  cardNumber: string;
  expireYear: string;
  expireMonth: string;
  cvc: string;
  cardAlias?: string;
  cardUserKey?: string;
};

export default VerifyCard;
