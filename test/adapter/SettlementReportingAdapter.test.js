const test = require('ava');
const nock = require('nock');

const Craftgate = require('../../dist');

const settlementReportingAdapter = new Craftgate.Adapter.SettlementReportingAdapter({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const payoutCompletedItem = {
  settlementRowId: 7,
  settlementFileId: 3,
  subject: 'PAYMENT_TX',
  subjectId: 10,
  paymentTransactionId: 10,
  merchantType: 'SUB_MERCHANT_MEMBER',
  merchantId: 2,
  payoutAmount: 27,
  currency: 'TRY',
  payoutDate: '2021-02-22T10:00:00',
  settlementEarningsDestination: 'IBAN',
  settlementSource: 'COLLECTION'
};

const paymentTransactionPayout = paymentTransactionId => ({
  paymentTransactionId,
  currency: 'TRY',
  parity: 1,
  approvalStatus: 'APPROVED',
  approvalStatusDate: '2021-02-21T12:00:00',
  blockageResolvedDate: '2021-02-21T15:00:00',
  createdDate: '2021-02-20T10:00:00',
  payoutItems: [
    {
      subject: 'REFUND_TX',
      subjectId: 30,
      merchantType: 'MERCHANT',
      merchantId: 1,
      payoutAmount: -3,
      currency: 'TRY',
      payoutStatus: 'ELIMINATED_BY_FULLY_REFUND',
      payoutDate: null,
      createdDate: '2021-02-20T11:00:00'
    }
  ]
});

test('should search payout completed items', async t => {
  const scope = nock('http://localhost:8000')
    .get('/settlement-reporting/v1/settlement-file/payout-completed-items')
    .query({
      settlementFileId: '3',
      settlementType: 'SETTLEMENT',
      startDate: '2021-02-22T00:00:00.000Z',
      endDate: '2021-02-22T23:59:59.000Z',
      page: '0',
      size: '10'
    })
    .reply(200, {
      data: {
        items: [payoutCompletedItem],
        page: 0,
        size: 10,
        totalSize: 1
      }
    });

  const request = {
    settlementFileId: 3,
    settlementType: Craftgate.Model.SettlementType.SETTLEMENT,
    startDate: new Date('2021-02-22T00:00:00Z'),
    endDate: new Date('2021-02-22T23:59:59Z'),
    page: 0,
    size: 10
  };

  const result = await settlementReportingAdapter.searchPayoutCompletedItems(request)
  t.true(scope.isDone())
  t.is(result.page, 0)
  t.is(result.size, 10)
  t.is(result.totalSize, 1)
  t.is(result.items.length, 1)
  t.is(result.items[0].settlementRowId, 7)
  t.is(result.items[0].settlementFileId, 3)
  t.is(result.items[0].subject, Craftgate.Model.SettlementRowItemSubject.PaymentTx)
  t.is(result.items[0].subjectId, 10)
  t.is(result.items[0].paymentTransactionId, 10)
  t.is(result.items[0].merchantType, Craftgate.Model.MerchantType.SUB_MERCHANT_MEMBER)
  t.is(result.items[0].merchantId, 2)
  t.is(result.items[0].payoutAmount, 27)
  t.is(result.items[0].currency, Craftgate.Model.Currency.TRY)
  t.is(result.items[0].payoutDate, '2021-02-22T10:00:00')
  t.is(result.items[0].settlementEarningsDestination, Craftgate.Model.SettlementEarningsDestination.Iban)
  t.is(result.items[0].settlementSource, Craftgate.Model.SettlementSource.COLLECTION)
});

test('should retrieve settlement row', async t => {
  const scope = nock('http://localhost:8000')
    .get('/settlement-reporting/v1/settlement-file/rows/7')
    .reply(200, {
      data: {
        rowDescription: 'row description',
        payoutDate: '2021-02-22T00:00:00',
        name: 'Sub Merchant',
        iban: 'TR000000000000000000000000',
        payoutAmount: 27,
        currency: 'TRY',
        merchantType: 'SUB_MERCHANT_MEMBER',
        merchantId: 2,
        settlementEarningsDestination: 'IBAN',
        settlementSource: 'COLLECTION',
        bounceStatus: 'NOT_BOUNCED',
        items: [
          {
            subject: 'PAYMENT_TX',
            subjectId: 10,
            paymentTransactionId: 10,
            payoutAmount: 27
          }
        ]
      }
    });

  const result = await settlementReportingAdapter.retrieveSettlementRow(7)
  t.true(scope.isDone())
  t.is(result.rowDescription, 'row description')
  t.is(result.payoutDate, '2021-02-22T00:00:00')
  t.is(result.name, 'Sub Merchant')
  t.is(result.iban, 'TR000000000000000000000000')
  t.is(result.payoutAmount, 27)
  t.is(result.currency, Craftgate.Model.Currency.TRY)
  t.is(result.merchantType, Craftgate.Model.MerchantType.SUB_MERCHANT_MEMBER)
  t.is(result.merchantId, 2)
  t.is(result.settlementEarningsDestination, Craftgate.Model.SettlementEarningsDestination.Iban)
  t.is(result.settlementSource, Craftgate.Model.SettlementSource.COLLECTION)
  t.is(result.bounceStatus, Craftgate.Model.BounceStatus.NotBounced)
  t.is(result.items.length, 1)
  t.is(result.items[0].subject, Craftgate.Model.SettlementRowItemSubject.PaymentTx)
  t.is(result.items[0].subjectId, 10)
  t.is(result.items[0].paymentTransactionId, 10)
  t.is(result.items[0].payoutAmount, 27)
});

test('should retrieve payment transaction payout', async t => {
  const scope = nock('http://localhost:8000')
    .get('/settlement-reporting/v1/payment-transactions/10/payout')
    .reply(200, {data: paymentTransactionPayout(10)});

  const result = await settlementReportingAdapter.retrievePaymentTransactionPayout(10)
  t.true(scope.isDone())
  t.is(result.paymentTransactionId, 10)
  t.is(result.currency, Craftgate.Model.Currency.TRY)
  t.is(result.parity, 1)
  t.is(result.approvalStatus, Craftgate.Model.PayoutApprovalStatus.Approved)
  t.is(result.approvalStatusDate, '2021-02-21T12:00:00')
  t.is(result.blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.createdDate, '2021-02-20T10:00:00')
  t.is(result.payoutItems.length, 1)
  t.is(result.payoutItems[0].subject, Craftgate.Model.PayoutItemSubject.RefundTx)
  t.is(result.payoutItems[0].subjectId, 30)
  t.is(result.payoutItems[0].merchantType, Craftgate.Model.MerchantType.MERCHANT)
  t.is(result.payoutItems[0].merchantId, 1)
  t.is(result.payoutItems[0].payoutAmount, -3)
  t.is(result.payoutItems[0].currency, Craftgate.Model.Currency.TRY)
  t.is(result.payoutItems[0].payoutStatus, Craftgate.Model.TransactionPayoutStatus.EliminatedByFullyRefund)
  t.is(result.payoutItems[0].payoutDate, null)
  t.is(result.payoutItems[0].createdDate, '2021-02-20T11:00:00')
});

test('should search payment transaction payouts', async t => {
  const scope = nock('http://localhost:8000')
    .get('/settlement-reporting/v1/payment-transactions/payouts?paymentTransactionIds=10&paymentTransactionIds=11')
    .reply(200, {
      data: {
        items: [paymentTransactionPayout(10), paymentTransactionPayout(11)]
      }
    });

  const request = {
    paymentTransactionIds: [10, 11]
  };

  const result = await settlementReportingAdapter.searchPaymentTransactionPayouts(request)
  t.true(scope.isDone())
  t.is(result.items.length, 2)
  t.is(result.items[0].paymentTransactionId, 10)
  t.is(result.items[0].payoutItems[0].subject, Craftgate.Model.PayoutItemSubject.RefundTx)
  t.is(result.items[1].paymentTransactionId, 11)
});
