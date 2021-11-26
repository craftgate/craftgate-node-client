import {Loyalty} from '../model/Loyalty';

import MerchantPos from './dto/MerchantPos';

type RetrieveLoyaltiesResponse = {
  cardBrand: string;
  force3ds: boolean;
  pos: MerchantPos;
  loyalties: Loyalty[];
};

export default RetrieveLoyaltiesResponse;
