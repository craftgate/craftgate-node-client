import CartItemType from '../../model/BnplCardItemType';

type BnplPaymentCartItem = {
  id: string;
  name: string;
  brandName: string;
  type: CartItemType;
  unitPrice: number;
  quantity: number;
};

export default BnplPaymentCartItem;
