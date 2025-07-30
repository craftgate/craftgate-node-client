import {Loyalty} from '../model/Loyalty';

import MerchantPos from './dto/MerchantPos';

type RetrieveLoyaltiesResponse = {
  cardBrand: string;
  cardIssuerBankName: string;
  cardIssuerBankId: number;
  force3ds: boolean;
  pos: MerchantPos;
  loyalties: Loyalty[];
};

export default RetrieveLoyaltiesResponse;
