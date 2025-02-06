import CardMigrationProvider from '../model/CardMigrationProvider';

type RetrieveProviderCardRequest = {
  providerCardToken: string;
  externalId: string;
  providerCardUserId: string;
  cardMigrationProvider: CardMigrationProvider;
};

export default RetrieveProviderCardRequest;
