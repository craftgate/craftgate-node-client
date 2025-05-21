// eslint-disable-next-line import/no-named-as-default
import AutopilotState from '../model/AutopilotState';
import CardAssociation from '../model/CardAssociation';
import Currency from '../model/Currency';
// eslint-disable-next-line import/no-named-as-default
import MerchantPosUser from '../model/MerchantPosUser';
import PaymentAuthenticationType from '../model/PaymentAuthenticationType';
import PosIntegrator from '../model/PosIntegrator';
import PosStatus from '../model/PosStatus';

type MerchantPosResponse = {
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
  enableForeignCard: boolean;
  enableInstallment: boolean;
  enablePaymentWithoutCvc: boolean;
  enableLoyalty: boolean;
  newIntegration: boolean;
  orderNumber: number;
  autopilotState: AutopilotState;
  currency: Currency;
  bankId: number;
  bankName: string;
  isPf: boolean;
  merchantPosUsers: MerchantPosUser[];
  supportedCardAssociations: CardAssociation[];
  enabledPaymentAuthenticationTypes: PaymentAuthenticationType[];
};

export default MerchantPosResponse;
