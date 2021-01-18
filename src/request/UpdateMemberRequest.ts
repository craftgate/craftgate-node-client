import MemberType from "../model/MemberType";
import SettlementEarningsDestination from "../model/SettlementEarningsDestination";

type UpdateMemberRequest = {
  isBuyer?: boolean,
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
  identityNumber?: string;
  legalCompanyTitle?: string;
  settlementEarningsDestination?: SettlementEarningsDestination;
};

export default UpdateMemberRequest;
