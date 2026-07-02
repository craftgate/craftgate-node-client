type MealVoucherCardTokenizationCompleteResponse = {
  sessionId: string;
  maskedCardNumber: string;
  fingerprint: string;
  balance: number;
};

export default MealVoucherCardTokenizationCompleteResponse;
