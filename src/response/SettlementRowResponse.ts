import BounceStatus from '../model/BounceStatus';
import Currency from '../model/Currency';
import MerchantType from '../model/MerchantType';
import SettlementEarningsDestination from '../model/SettlementEarningsDestination';
import SettlementSource from '../model/SettlementSource';

import SettlementRowItem from './dto/SettlementRowItem';

type SettlementRowResponse = {
  rowDescription: string;
  payoutDate: Date;
  name: string;
  iban: string;
  payoutAmount: number;
  currency: Currency;
  merchantType: MerchantType;
  merchantId: number;
  settlementEarningsDestination: SettlementEarningsDestination;
  settlementSource: SettlementSource;
  bounceStatus: BounceStatus;
  items: SettlementRowItem[];
};

export default SettlementRowResponse;
