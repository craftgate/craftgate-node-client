import ApmType from "../model/ApmType";
import PaymentResponse from "./PaymentResponse";

type ApmPaymentResponse = PaymentResponse & {
    apmType: ApmType; transactionId: string; redirectUrl: string;
};

export default ApmPaymentResponse;
