import BnplPaymentCartItem from './dto/BnplPaymentCartItem';
import InitApmPaymentRequest from './InitApmPaymentRequest';

type InitBnplPaymentRequest = InitApmPaymentRequest & {
  bankCode: string;
  cartItems: BnplPaymentCartItem[];
};

export default InitBnplPaymentRequest;
