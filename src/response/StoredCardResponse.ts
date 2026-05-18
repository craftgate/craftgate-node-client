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
  expireYear: string;
  expireMonth: string;
  isCommercial: boolean;
  cardExpiryStatus: CardExpiryStatus;
  createdAt: Date;
};

export default StoredCardResponse;
