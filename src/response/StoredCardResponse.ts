import CardAssociation from '../model/CardAssociation';
import CardExpiryStatus from '../model/CardExpiryStatus';
import CardType from '../model/CardType';

type StoredCardResponse = {
  binNumber: string;
  lastFourDigits: string;
  cardUserKey: string;
  cardToken: string;
  cardHolderName: string;
  cardAlias: string;
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  cardBankName: string;
  cardBankId: number;
  cardExpiryStatus: CardExpiryStatus;
  createdAt: string;
};

export default StoredCardResponse;
