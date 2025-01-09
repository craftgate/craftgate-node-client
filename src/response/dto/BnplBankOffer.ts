import BnplBankOfferTerm from './BnplBankOfferTerm';

type BnplBankOffer = {
  bankCode: string;
  bankName: string;
  bankIconUrl: string;
  bankTableBannerMessage: string;
  bankSmallBannerMessage: string;
  preApprovedApplicationId: string;
  isSupportNonCustomer: boolean;
  isPaymentPlanCalculatedByBank: boolean;
  bankOfferTerms: BnplBankOfferTerm[];
};

export default BnplBankOffer;
