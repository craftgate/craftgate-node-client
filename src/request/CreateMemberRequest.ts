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
  phoneNumber: string;
  taxOffice?: string;
  taxNumber?: string;
  contactName?: string;
  contactSurname?: string;
  identityNumber?: string;
  legalCompanyTitle?: string;
  settlementEarningsDestination?: SettlementEarningsDestination;
  /**
   * @deprecated use @{@link CreateMemberWalletRequest.negativeAmountLimit} instead.
   */
  negativeWalletAmountLimit?: number;
};

export default CreateMemberRequest;
