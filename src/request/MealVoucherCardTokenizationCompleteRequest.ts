import BaseRequest from './BaseRequest';

type MealVoucherCardTokenizationCompleteRequest = BaseRequest & {
  validationCode?: string;
};

export default MealVoucherCardTokenizationCompleteRequest;
