import BnplPaymentCartItem from "./dto/BnplPaymentCartItem";
import ApmPaymentInitRequest from "./ApmPaymentInitRequest";


type BnplPaymentInitRequest = ApmPaymentInitRequest & {
    bankCode: string; cartItems: BnplPaymentCartItem [];

};

export default BnplPaymentInitRequest;
