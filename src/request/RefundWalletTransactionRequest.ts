import BaseRequest from './BaseRequest';

type RefundWalletTransactionRequest = BaseRequest & {
  refundPrice: number;
};

export default RefundWalletTransactionRequest;
