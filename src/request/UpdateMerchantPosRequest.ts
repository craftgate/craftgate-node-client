import CardAssociation from '../model/CardAssociation';

import UpdateMerchantPosUser from './dto/UpdateMerchantPosUser';

type UpdateMerchantPosRequest = {
  name: string;
  hostname: string;
  clientId: string;
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
  merchantPosUsers: UpdateMerchantPosUser[];
  supportedCardAssociations: CardAssociation[];
};

export default UpdateMerchantPosRequest;
