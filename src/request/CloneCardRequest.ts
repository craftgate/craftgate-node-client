type CloneCardRequest = {
  sourceCardUserKey: string;
  sourceCardToken: string;
  targetCardUserKey: string;
  targetMerchantId: number;
};

export default CloneCardRequest;
