import ApmType from '../model/ApmType';

type CompleteBnplLimitInquiryRequest = {
  apmType: ApmType;
  merchantApmId: number;
  additionalParams: {
    buyerPhoneNumber: string;
    otpCode: string;
  };
};

export default CompleteBnplLimitInquiryRequest;
