import CardAssociation from '../model/CardAssociation';
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
};

export default StoredCardResponse;
