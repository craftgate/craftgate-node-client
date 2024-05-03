import BnplBankOfferTerm from './BnplBankOfferTerm';

type BnplBankOffer = {
  bankCode: string;
  bankName: string;
  bankIconUrl: string;
  bankTableBannerMessage: string;
  bankSmallBannerMessage: string;
  isSupportNonCustomer: boolean;
  isPaymentPlanCalculatedByBank: boolean;
  bankOfferTerms: BnplBankOfferTerm[];
};

export default BnplBankOffer;
