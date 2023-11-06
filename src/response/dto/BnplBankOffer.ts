type BnplBankOffer = {
    bankCode: string; bankName: string; bankIconUrl: string; bankTableBannerMessage: string; bankSmallBannerMessage: string; isSupportNonCustomer: boolean; bankOfferTerms: BnplBankOfferTerm [];

};

export default BnplBankOffer;
