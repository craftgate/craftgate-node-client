import ApmType from '../model/ApmType';

type InitBnplLimitInquiryRequest = {
  apmType: ApmType;
  merchantApmId: number;
  additionalParams: {
    buyerPhoneNumber: string;
    buyerIdentityNumber: string;
    buyerBirthdate: string;
  };
};

export default InitBnplLimitInquiryRequest;
