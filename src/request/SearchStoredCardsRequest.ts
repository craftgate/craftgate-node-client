import CardAssociation from '../model/CardAssociation';
import CardExpiryStatus from '../model/CardExpiryStatus';
import CardType from '../model/CardType';

type SearchStoredCardsRequest = {
  cardAlias?: string;
  cardBrand?: string;
  cardType?: CardType;
  cardUserKey?: string;
  cardToken?: string;
  cardBankName?: string;
  cardAssociation?: CardAssociation;
  cardExpiryStatus?: CardExpiryStatus;
  page?: number;
  size?: number;
};

export default SearchStoredCardsRequest;
