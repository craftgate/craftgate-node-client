import ApmType from '../model/ApmType';

import BaseRequest from './BaseRequest';

type CompleteBnplLimitInquiryRequest = BaseRequest & {
  apmType: ApmType;
  merchantApmId: number;
  additionalParams: {
    buyerPhoneNumber: string;
    otpCode: string;
  };
};

export default CompleteBnplLimitInquiryRequest;
