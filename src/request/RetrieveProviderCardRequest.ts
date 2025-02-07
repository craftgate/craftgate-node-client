import CardProvider from '../model/CardProvider';

type RetrieveProviderCardRequest = {
  providerCardToken: string;
  externalId: string;
  providerCardUserId: string;
  cardProvider: CardProvider;
};

export default RetrieveProviderCardRequest;
