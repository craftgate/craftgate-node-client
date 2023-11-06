import BnplBankOffer from "./dto/BnplBankOffer";

type BnplPaymentOfferResponse = {
    offerId: string; price: number; bankOffers: BnplBankOffer[];

};

export default BnplPaymentOfferResponse;
