import {Loyalty} from '../../model/Loyalty';

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

export type Card = PaymentCard | StoredCard;
