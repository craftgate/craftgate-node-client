import ApmPaymentInitRequest from './ApmPaymentInitRequest';
import BnplPaymentCartItem from './dto/BnplPaymentCartItem';

type BnplPaymentInitRequest = ApmPaymentInitRequest & {
  bankCode: string;
  cartItems: BnplPaymentCartItem[];
};

export default BnplPaymentInitRequest;
