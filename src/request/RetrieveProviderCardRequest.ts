import CardProvider from '../model/CardProvider';

import BaseRequest from './BaseRequest';

type RetrieveProviderCardRequest = BaseRequest & {
  providerCardToken: string;
  externalId: string;
  providerCardUserId: string;
  cardProvider: CardProvider;
};

export default RetrieveProviderCardRequest;
