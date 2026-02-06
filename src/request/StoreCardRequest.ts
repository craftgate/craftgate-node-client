type StoreCardRequest = {
  cardHolderName: string;
  cardNumber: string;
  expireYear: string;
  expireMonth: string;
  secureFieldsToken?: string;
  cardAlias?: string;
  cardUserKey?: string;
};

export default StoreCardRequest;
