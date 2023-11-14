import CartItemType from '../../model/BnplCartItemType';

type BnplPaymentCartItem = {
  id: string;
  name: string;
  brandName: string;
  type: CartItemType;
  unitPrice: number;
  quantity: number;
};

export default BnplPaymentCartItem;
