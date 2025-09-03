type UpdateCardRequest = {
  cardUserKey: string;
  cardToken: string;
  expireYear: string;
  expireMonth: string;
  cardAlias?: string;
};

export default UpdateCardRequest;
