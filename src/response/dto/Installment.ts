import CardAssociation from '../../model/CardAssociation';
import CardType from '../../model/CardType';

import InstallmentPrice from './InstallmentPrice';

type Installment = {
  binNumber: string;
  price: number;
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  bankName: string;
  bankCode: number;
  force3ds: boolean;
  commercial: boolean;
  installmentPrices: InstallmentPrice[];
};

export default Installment;
