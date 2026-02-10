import CardVerifyStatus from '../model/CardVerifyStatus';
import RefundStatus from '../model/RefundStatus';

type VerifyCardResponse = {
  cardUserKey: string;
  cardToken: string;
  htmlContent: string;
  redirectUrl: string;
  merchantCallbackUrl: string;
  refundStatus: RefundStatus;
  cardVerifyStatus: CardVerifyStatus;
};

export default VerifyCardResponse;
