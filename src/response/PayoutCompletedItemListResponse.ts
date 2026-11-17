import PayoutCompletedItem from './dto/PayoutCompletedItem';

type PayoutCompletedItemListResponse = {
  items: PayoutCompletedItem[];
  page: number;
  size: number;
  totalSize: number;
};

export default PayoutCompletedItemListResponse;
