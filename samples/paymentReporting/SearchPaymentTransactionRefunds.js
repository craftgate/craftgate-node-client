const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

function createDate(days, hours, minutes, seconds) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);
  return date;
}

// play with the request
const request = {
  page: 0,
  size: 3,
  id: 1,
  paymentId: 1,
  paymentTrasactionId: 1,
  buyerMemberId: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  status: Craftgate.Model.RefundStatus.Success,
  currency: Craftgate.Model.Currency.TRY,
  minRefundPrice: 5,
  maxRefundPrice: 10,
  isAfterSettlement: false,
  minCreatedDate: createDate(-1, 0, 0, 0),
  maxCreatedDate: createDate(-1, 23, 59, 59)
};

craftgate.paymentReporting().searchPaymentTransactionRefunds(request)
  .then(result => console.info('Search payment transaction refunds', result))
  .catch(err => console.error('Failed to search payment transaction refunds', err));
