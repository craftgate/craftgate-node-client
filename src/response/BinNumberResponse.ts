import CardAssociation from '../model/CardAssociation';
import CardType from '../model/CardType';

type BinNumberResponse = {
  binNumber: string;
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  bankName: string;
  bankCode: number;
  commercial: boolean;
};

export default BinNumberResponse;
