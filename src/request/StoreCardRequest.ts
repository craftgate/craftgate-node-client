import BaseRequest from './BaseRequest';
import {EncryptedCard} from './dto/EncryptedCard';

type StoreCardRequest = BaseRequest & {
  cardHolderName: string;
  cardNumber: string;
  expireYear: string;
  expireMonth: string;
  secureFieldsToken?: string;
  cardAlias?: string;
  cardUserKey?: string;
  encryptedCard?: EncryptedCard;
};

export default StoreCardRequest;
