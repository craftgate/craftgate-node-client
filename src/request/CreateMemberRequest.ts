import MemberType from '../model/MemberType';
import SettlementEarningsDestination from '../model/SettlementEarningsDestination';

type CreateMemberRequest = {
  isBuyer?: boolean;
  isSubMerchant?: boolean;
  memberType?: MemberType;
  memberExternalId: string;
  name?: string;
  address: string;
  email: string;
  iban?: string;
  settlementEarningsDestination?: SettlementEarningsDestination;
  phoneNumber: string;
  taxOffice?: string;
  taxNumber?: string;
  contactName?: string;
  contactSurname?: string;
  legalCompanyTitle?: string;
  /**
   * @deprecated use @{@link CreateMemberWalletRequest.negativeAmountLimit} instead.
   */
  negativeWalletAmountLimit?: number;
  subMerchantMaximumAllowedNegativeBalance?: number;
};

export default CreateMemberRequest;
