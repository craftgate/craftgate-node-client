import {ClientCreationOptions} from '../lib/HttpClient';

import SearchPaymentTransactionPayoutsRequest from '../request/SearchPaymentTransactionPayoutsRequest';
import SearchPayoutBouncedTransactionsRequest from '../request/SearchPayoutBouncedTransactionsRequest';
import SearchPayoutCompletedItemsRequest from '../request/SearchPayoutCompletedItemsRequest';
import SearchPayoutRowsRequest from '../request/SearchPayoutRowsRequest';

import PaymentTxPayoutListResponse from '../response/PaymentTxPayoutListResponse';
import PaymentTxPayoutResponse from '../response/PaymentTxPayoutResponse';
import PayoutBouncedTransactionListResponse from '../response/PayoutBouncedTransactionListResponse';
import PayoutCompletedItemListResponse from '../response/PayoutCompletedItemListResponse';
import PayoutRowListResponse from '../response/PayoutRowListResponse';
import SettlementRowResponse from '../response/SettlementRowResponse';

import BaseAdapter from './BaseAdapter';

export default class SettlementReportingAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async searchPayoutCompletedItems(request: SearchPayoutCompletedItemsRequest): Promise<PayoutCompletedItemListResponse> {
    return this._client.get('/settlement-reporting/v1/settlement-file/payout-completed-items', request);
  }

  async searchBouncedPayoutTransactions(request: SearchPayoutBouncedTransactionsRequest): Promise<PayoutBouncedTransactionListResponse> {
    return this._client.get('/settlement-reporting/v1/settlement-file/bounced-sub-merchant-rows', request);
  }

  async retrieveSettlementRow(settlementRowId: number): Promise<SettlementRowResponse> {
    return this._client.get(`/settlement-reporting/v1/settlement-file/rows/${settlementRowId}`);
  }

  async searchPayoutRow(request: SearchPayoutRowsRequest): Promise<PayoutRowListResponse> {
    return this._client.get('/settlement-reporting/v1/settlement-file-rows', request);
  }

  async retrievePaymentTransactionPayout(paymentTransactionId: number): Promise<PaymentTxPayoutResponse> {
    return this._client.get(`/settlement-reporting/v1/payment-transactions/${paymentTransactionId}/payout`);
  }

  async searchPaymentTransactionPayouts(request: SearchPaymentTransactionPayoutsRequest): Promise<PaymentTxPayoutListResponse> {
    return this._client.get('/settlement-reporting/v1/payment-transactions/payouts', request);
  }
}
