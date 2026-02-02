import {Loyalty} from '../../model/Loyalty';
import TokenizedCardType from '../../model/TokenizedCardType';
import {EncryptedCard} from './EncryptedCard';

export type PaymentCard = {
  cardAlias?: string;
  cardHolderName: string;
  cardNumber: string;
  expireYear: string;
  expireMonth: string;
  cvc: string;
  storeCardAfterSuccessPayment?: boolean;
  cardUserKey?: string;
  loyalty?: Loyalty;
};

export type StoredCard = {
  cardUserKey: string;
  cardToken: string;
  loyalty?: Loyalty;
};

export type First6Last4CardWithIdentityNumber = {
  cardHolderIdentityNumber: string;
  binNumber: string;
  lastFourDigits: string;
};

export type TokenizedCard = {
  tokenizedCard: {
    type: TokenizedCardType;
    data: any;
  };
};

export type SecureFieldsCard = {
  secureFieldsToken: string;
};

export type EncryptedCardType = {
  encryptedCard: EncryptedCard;
};

export type Card = PaymentCard | StoredCard | First6Last4CardWithIdentityNumber | TokenizedCard | SecureFieldsCard | EncryptedCardType;
