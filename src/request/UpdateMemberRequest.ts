import MemberType from '../model/MemberType';
import SettlementEarningsDestination from '../model/SettlementEarningsDestination';

type UpdateMemberRequest = {
  isBuyer?: boolean;
  isSubMerchant?: boolean;
  memberType?: MemberType;
  name?: string;
  address: string;
  email: string;
  iban?: string;
  phoneNumber?: string;
  taxOffice?: string;
  taxNumber?: string;
  contactName?: string;
  contactSurname?: string;
  legalCompanyTitle?: string;
  settlementEarningsDestination?: SettlementEarningsDestination;
  /**
   * @deprecated use @{@link CreateMemberWalletRequest.negativeAmountLimit} instead.
   */
  negativeWalletAmountLimit?: number;
  subMerchantMaximumAllowedNegativeBalance?: number;
};

export default UpdateMemberRequest;
