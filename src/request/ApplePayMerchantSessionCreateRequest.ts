import BaseRequest from './BaseRequest';

type ApplePayMerchantSessionCreateRequest = BaseRequest & {
  merchantIdentifier: string;
  displayName: string;
  initiative: string;
  initiativeContext: string;
  validationUrl: string;
};

export default ApplePayMerchantSessionCreateRequest;
