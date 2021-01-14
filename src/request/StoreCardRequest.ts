type StoreCardRequest = {
  cardHolderName: string;
  cardNumber: string;
  expireYear: string;
  expireMonth: string;
  cardAlias?: string;
  cardUserKey?: string;
};

export default StoreCardRequest;
