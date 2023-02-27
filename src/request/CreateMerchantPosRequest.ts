import Currency from '../model/Currency';
import PosIntegrator from '../model/PosIntegrator';
import PosStatus from '../model/PosStatus';

import CreateMerchantPosUser from './dto/CreateMerchantPosUser';

type CreateMerchantPosRequest = {
  status: PosStatus;
  name: string;
  clientId: string;
  currency: Currency;
  posnetId: string;
  terminalId: string;
  threedsPosnetId: string;
  threedsTerminalId: string;
  threedsKey: string;
  forceThreeDs: boolean;
  enableForeignCard: boolean;
  enableInstallment: boolean;
  enablePaymentWithoutCvc: boolean;
  newIntegration: boolean;
  orderNumber: number;
  posIntegrator: PosIntegrator;
  merchantPosUsers: CreateMerchantPosUser[];
};

export default CreateMerchantPosRequest;
