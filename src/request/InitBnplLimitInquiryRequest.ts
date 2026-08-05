import ApmType from '../model/ApmType';

import BaseRequest from './BaseRequest';

type InitBnplLimitInquiryRequest = BaseRequest & {
  apmType: ApmType;
  merchantApmId: number;
  additionalParams: {
    buyerPhoneNumber: string;
    buyerIdentityNumber: string;
    buyerBirthdate: string;
  };
};

export default InitBnplLimitInquiryRequest;
