import ApmType from '../model/ApmType';
import Currency from '../model/Currency';
import Status from '../model/Status';

type MerchantApmResponse = {
  id: number;
  status: Status;
  name: string;
  apmType: ApmType;
  hostName: string;
  supportedCurrencies: Currency[];
};

export default MerchantApmResponse;
