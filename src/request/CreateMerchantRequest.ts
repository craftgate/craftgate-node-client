import BaseRequest from './BaseRequest';

type CreateMerchantRequest = BaseRequest & {
  name: string;
  legalCompanyTitle: string;
  email: string;
  secretWord: string;
  website: string;
  phoneNumber: string;
  contactName: string;
  contactSurname: string;
  contactPhoneNumber: string;
};

export default CreateMerchantRequest;
