import CardAssociation from '../model/CardAssociation';
import Currency from '../model/Currency';
import PosIntegrator from '../model/PosIntegrator';
import PosStatus from '../model/PosStatus';

import AutopilotState from './dto/AutopilotState';
import MerchantPosUser from './dto/MerchantPosUser';

type CreateMerchantResponse = {
  id: number;
  status: PosStatus;
  name: string;
  alias: string;
  posIntegrator: PosIntegrator;
  hostname: string;
  clientId: string;
  posCurrencyCode: string;
  mode: string;
  path: string;
  port: number;
  posnetId: string;
  terminalId: string;
  threedsPosnetId: string;
  threedsTerminalId: string;
  threedsKey: string;
  threedsPath: string;
  forceThreeDs: boolean;
  enableForeignCard: boolean;
  enableInstallment: boolean;
  enablePaymentWithoutCvc: boolean;
  newIntegration: boolean;
  orderNumber: number;
  autopilotState: AutopilotState;
  currency: Currency;
  bankId: number;
  bankName: string;
  isPf: boolean;
  merchantPosUsers: MerchantPosUser[];
  supportedCardAssociations: CardAssociation[];
};

export default CreateMerchantResponse;
