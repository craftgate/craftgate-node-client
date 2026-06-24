import ApmType from '../model/ApmType';

import MealVoucherCardTokenizationData from './dto/MealVoucherCardTokenizationData';

type InitMealVoucherCardTokenizationRequest = {
  apmType: ApmType;
  mealVoucherCardTokenizationData: MealVoucherCardTokenizationData;
};

export default InitMealVoucherCardTokenizationRequest;
