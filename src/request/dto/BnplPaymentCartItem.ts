import BnplCartItemType from '../../model/BnplCartItemType';

type BnplPaymentCartItem = {
  id: string;
  name: string;
  brandName: string;
  type: BnplCartItemType;
  unitPrice: number;
  quantity: number;
};

export default BnplPaymentCartItem;
