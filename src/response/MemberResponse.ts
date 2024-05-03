import MemberType from '../model/MemberType';
import SettlementEarningsDestination from '../model/SettlementEarningsDestination';
import Status from '../model/Status';

type MemberResponse = {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  status: Status;
  isBuyer: boolean;
  isSubMerchant: boolean;
  memberType: MemberType;
  memberExternalId: string;
  name: string;
  email: string;
  iban: string;
  address: string;
  phoneNumber: string;
  taxOffice: string;
  taxNumber: string;
  contactName: string;
  contactSurname: string;
  legalCompanyTitle: string;
  settlementEarningsDestination: SettlementEarningsDestination;
};

export default MemberResponse;
