import ApmType from '../model/ApmType';

import BaseRequest from './BaseRequest';
import MealVoucherCardTokenizationData from './dto/MealVoucherCardTokenizationData';

type InitMealVoucherCardTokenizationRequest = BaseRequest & {
  apmType: ApmType;
  mealVoucherCardTokenizationData: MealVoucherCardTokenizationData;
};

export default InitMealVoucherCardTokenizationRequest;
