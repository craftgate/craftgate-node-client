import {ClientCreationOptions} from '../lib/HttpClient';

import SearchPayoutBouncedTransactionsRequest from '../request/SearchPayoutBouncedTransactionsRequest';
import SearchPayoutCompletedTransactionsRequest from '../request/SearchPayoutCompletedTransactionsRequest';

import PayoutBouncedTransactionListResponse from '../response/PayoutBouncedTransactionListResponse';
import PayoutCompletedTransactionListResponse from '../response/PayoutCompletedTransactionListResponse';
import PayoutDetailResponse from '../response/PayoutDetailResponse';

import BaseAdapter from './BaseAdapter';

export default class SettlementReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchPayoutCompletedTransactions(request: SearchPayoutCompletedTransactionsRequest): Promise<PayoutCompletedTransactionListResponse> {
    return this._client.get('/settlement-reporting/v1/settlement-file/payout-completed-transactions', request);
  }

  async searchBouncedPayoutTransactions(request: SearchPayoutBouncedTransactionsRequest): Promise<PayoutBouncedTransactionListResponse> {
    return this._client.get('/settlement-reporting/v1/settlement-file/bounced-sub-merchant-rows', request);
  }

  async retrievePayoutDetails(id: number): Promise<PayoutDetailResponse> {
    return this._client.get(`/settlement-reporting/v1/settlement-file/payout-details/${id}`);
  }
}
