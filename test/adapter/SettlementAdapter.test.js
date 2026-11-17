const test = require('ava');
const nock = require('nock');

const Craftgate = require('../../dist');

const settlementAdapter = new Craftgate.Adapter.SettlementAdapter({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

test('should approve payment transactions', async t => {
  const scope = nock('http://localhost:8000')
    .post('/settlement/v1/payment-transactions/approve', {
      paymentTransactionIds: [100, 101],
      isTransactional: false
    })
    .reply(200, {
      data: {
        items: [
          {
            paymentTransactionId: 100,
            approvalStatus: 'SUCCESS',
            failedReason: null,
            failedReasonCode: null
          },
          {
            paymentTransactionId: 101,
            approvalStatus: 'FAILURE',
            failedReason: 'already approved',
            failedReasonCode: '10000'
          }
        ]
      }
    });

  const request = {
    paymentTransactionIds: [100, 101],
    isTransactional: false
  };

  const result = await settlementAdapter.approvePaymentTransactions(request)
  t.true(scope.isDone())
  t.is(result.items[0].paymentTransactionId, 100)
  t.is(result.items[0].approvalStatus, Craftgate.Model.ApprovalStatus.Success)
  t.is(result.items[0].failedReason, null)
  t.is(result.items[0].failedReasonCode, null)
  t.is(result.items[1].paymentTransactionId, 101)
  t.is(result.items[1].approvalStatus, Craftgate.Model.ApprovalStatus.Failure)
  t.is(result.items[1].failedReason, 'already approved')
  t.is(result.items[1].failedReasonCode, '10000')
});

test('should disapprove payment transactions', async t => {
  const scope = nock('http://localhost:8000')
    .post('/settlement/v1/payment-transactions/disapprove', {
      paymentTransactionIds: [100, 101],
      isTransactional: false
    })
    .reply(200, {
      data: {
        items: [
          {
            paymentTransactionId: 100,
            approvalStatus: 'SUCCESS',
            failedReason: null,
            failedReasonCode: null
          },
          {
            paymentTransactionId: 101,
            approvalStatus: 'FAILURE',
            failedReason: 'already disapproved',
            failedReasonCode: '10000'
          }
        ]
      }
    });

  const request = {
    paymentTransactionIds: [100, 101],
    isTransactional: false
  };

  const result = await settlementAdapter.disapprovePaymentTransactions(request)
  t.true(scope.isDone())
  t.is(result.items[0].paymentTransactionId, 100)
  t.is(result.items[0].approvalStatus, Craftgate.Model.ApprovalStatus.Success)
  t.is(result.items[0].failedReason, null)
  t.is(result.items[0].failedReasonCode, null)
  t.is(result.items[1].paymentTransactionId, 101)
  t.is(result.items[1].approvalStatus, Craftgate.Model.ApprovalStatus.Failure)
  t.is(result.items[1].failedReason, 'already disapproved')
  t.is(result.items[1].failedReasonCode, '10000')
});

test('should update payment transaction', async t => {
  const scope = nock('http://localhost:8000')
    .put('/settlement/v1/payment-transactions/10', {
      subMerchantMemberId: 1,
      subMerchantMemberPrice: 5,
      blockageResolvedDate: '2021-02-21T15:00:00.000Z'
    })
    .reply(200, {
      data: {
        paymentTransactionId: 10,
        currency: 'TRY',
        parity: 1,
        approvalStatus: 'WAITING',
        approvalStatusDate: null,
        blockageResolvedDate: '2021-02-21T15:00:00',
        createdDate: '2021-02-20T10:00:00',
        payoutItems: [
          {
            subject: 'PAYMENT_TX',
            subjectId: 10,
            merchantType: 'MERCHANT',
            merchantId: 1,
            payoutAmount: 4.5,
            currency: 'TRY',
            payoutStatus: 'WAITING_FOR_PAYOUT',
            payoutDate: null,
            createdDate: '2021-02-20T10:00:00'
          },
          {
            subject: 'PAYMENT_TX',
            subjectId: 10,
            merchantType: 'SUB_MERCHANT_MEMBER',
            merchantId: 1,
            payoutAmount: 5,
            currency: 'TRY',
            payoutStatus: 'WAITING_FOR_PAYOUT',
            payoutDate: null,
            createdDate: '2021-02-20T10:00:00'
          }
        ]
      }
    });

  const request = {
    subMerchantMemberId: 1,
    subMerchantMemberPrice: 5,
    blockageResolvedDate: new Date('2021-02-21T15:00:00Z')
  };

  const result = await settlementAdapter.updatePaymentTransaction(10, request)
  t.true(scope.isDone())
  t.is(result.paymentTransactionId, 10)
  t.is(result.currency, Craftgate.Model.Currency.TRY)
  t.is(result.parity, 1)
  t.is(result.approvalStatus, Craftgate.Model.PayoutApprovalStatus.Waiting)
  t.is(result.approvalStatusDate, null)
  t.is(result.blockageResolvedDate, '2021-02-21T15:00:00')
  t.is(result.createdDate, '2021-02-20T10:00:00')
  t.is(result.payoutItems.length, 2)
  t.is(result.payoutItems[0].subject, Craftgate.Model.PayoutItemSubject.PaymentTx)
  t.is(result.payoutItems[0].subjectId, 10)
  t.is(result.payoutItems[0].merchantType, Craftgate.Model.MerchantType.MERCHANT)
  t.is(result.payoutItems[0].merchantId, 1)
  t.is(result.payoutItems[0].payoutAmount, 4.5)
  t.is(result.payoutItems[0].payoutStatus, Craftgate.Model.TransactionPayoutStatus.WaitingForPayout)
  t.is(result.payoutItems[1].merchantType, Craftgate.Model.MerchantType.SUB_MERCHANT_MEMBER)
  t.is(result.payoutItems[1].payoutAmount, 5)
});
