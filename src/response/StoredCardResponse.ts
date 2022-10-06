import CardAssociation from '../model/CardAssociation';
import CardExpiryStatus from '../model/CardExpiryStatus';
import CardType from '../model/CardType';

type StoredCardResponse = {
  binNumber: string;
  lastFourDigits: string;
  cardUserKey: string;
  cardToken: string;
  cardAlias: string;
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  cardBankName: string;
  cardBankId: number;
  cardExpiryStatus: CardExpiryStatus;
};

export default StoredCardResponse;
