import CreateMerchantPosUser from '../model/CreateMerchantPosUser';
import Currency from '../model/Currency';
import PaymentAuthenticationType from '../model/PaymentAuthenticationType';
import PosIntegrator from '../model/PosIntegrator';
import PosStatus from '../model/PosStatus';

type CreateMerchantPosRequest = {
  status: PosStatus;
  name: string;
  clientId?: string;
  currency: Currency;
  posnetId?: string;
  terminalId: string;
  threedsPosnetId?: string;
  threedsTerminalId?: string;
  threedsKey?: string;
  enableForeignCard: boolean;
  enableInstallment: boolean;
  enablePaymentWithoutCvc: boolean;
  enableLoyalty?: boolean;
  newIntegration?: boolean;
  orderNumber: number;
  posIntegrator: PosIntegrator;
  enabledPaymentAuthenticationTypes: PaymentAuthenticationType[];
  merchantPosUsers: CreateMerchantPosUser[];
};

export default CreateMerchantPosRequest;
