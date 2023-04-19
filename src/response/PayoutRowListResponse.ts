import PayoutRow from './dto/PayoutRow';

type PayoutRowListResponse = {
  items: PayoutRow[];
  page: number;
  size: number;
  totalSize: number;
};

export default PayoutRowListResponse;
