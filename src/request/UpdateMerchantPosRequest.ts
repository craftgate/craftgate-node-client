import CardAssociation from '../model/CardAssociation';
import PaymentAuthenticationType from '../model/PaymentAuthenticationType';
import UpdateMerchantPosUser from '../model/UpdateMerchantPosUser';

type UpdateMerchantPosRequest = {
  name: string;
  hostname: string;
  clientId?: string;
  mode: string;
  path: string;
  port: number;
  posnetId?: string;
  terminalId: string;
  threedsPosnetId?: string;
  threedsTerminalId?: string;
  threedsKey?: string;
  threedsPath: string;
  enableForeignCard: boolean;
  enableInstallment: boolean;
  enablePaymentWithoutCvc: boolean;
  enableLoyalty?: boolean;
  newIntegration?: boolean;
  orderNumber: number;
  supportedCardAssociations: CardAssociation[];
  enabledPaymentAuthenticationTypes: PaymentAuthenticationType[];
  merchantPosUsers: UpdateMerchantPosUser[];
};

export default UpdateMerchantPosRequest;
