import BaseRequest from './BaseRequest';
import MealVoucherCardTokenizationData from './dto/MealVoucherCardTokenizationData';

type MealVoucherCardTokenizationRegenerateRequest = BaseRequest & {
  mealVoucherCardTokenizationData: MealVoucherCardTokenizationData;
};

export default MealVoucherCardTokenizationRegenerateRequest;
