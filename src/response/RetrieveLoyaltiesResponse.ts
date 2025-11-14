import {FraudResult} from '../model/FraudResult';
import {Loyalty} from '../model/Loyalty';

import MerchantPos from './dto/MerchantPos';

type RetrieveLoyaltiesResponse = {
  cardBrand: string;
  cardIssuerBankName: string;
  cardIssuerBankId: number;
  force3ds: boolean;
  pos: MerchantPos;
  fraudResult: FraudResult;
  loyalties: Loyalty[];
};

export default RetrieveLoyaltiesResponse;
