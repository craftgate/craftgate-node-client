import ApmType from "../model/ApmType";
import Currency from "../model/Currency";
import BnplPaymentCartItem from "./dto/BnplPaymentCartItem";


type BnplPaymentOfferRequest = {
    apmType: ApmType;
    merchantApmId: number;
    price: number;
    currency: Currency;
    items: BnplPaymentCartItem[];
};

export default  BnplPaymentOfferRequest;
