type CheckMasterpassUserResponse = {
  isEligibleToUseMasterpass: boolean;
  isAnyCardSavedInCustomerProgram: boolean;
  hasMasterpassAccount: boolean;
  hashAnyCardSavedInMasterpassAccount: boolean;
  isMasterpassAccountLinkedWithMerchant: boolean;
  isMasterpassAccountLocked: boolean;
  isPhoneNumberUpdatedInAnotherMerchant: boolean;
  accountStatus: string;
};

export default CheckMasterpassUserResponse;
