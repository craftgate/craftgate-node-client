import StoredCardResponse from './StoredCardResponse';

type RetrieveCheckoutCardVerifyResponse = {
  token: string;
  card: StoredCardResponse | null;
};

export default RetrieveCheckoutCardVerifyResponse;
