import PaymentStatus from "../model/PaymentStatus";
import ApmAdditionalAction from "../model/ApmAdditionalAction";
import PaymentError from "./dto/PaymentError";

type BnplPaymentInitResponse = {
    paymentId: number;
    redirectUrl: string;
    paymentStatus: PaymentStatus;
    apmAdditionalAction: ApmAdditionalAction;
    paymentError: PaymentError;
};

export default BnplPaymentInitResponse;
