import ApmAdditionalAction from '../model/ApmAdditionalAction';

type InitMealVoucherCardTokenizationResponse = {
  sessionId: string;
  additionalAction: ApmAdditionalAction;
  htmlContent: string;
  redirectUrl: string;
};

export default InitMealVoucherCardTokenizationResponse;
