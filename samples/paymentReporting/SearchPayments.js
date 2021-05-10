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

const request = {
  page: 0,
  size: 3,
  paymentId: 1,
  paymentTransactionId: 1,
  subMerchantMemberId: 1,
  buyerMemberId: 1,
  conversationId: '456d1297-908e-4bd6-a13b-4be31a6e47d5',
  orderId: '20210329101111046AyfWLxk',
  paymentType: Craftgate.Model.PaymentType.CardPayment,
  paymentStatus: Craftgate.Model.PaymentStatus.Success,
  binNumber: '525864',
  lastFourDigits: '0001',
  currency: Craftgate.Model.Currency.TRY,
  minPaidPrice: 5,
  maxPaidPrice: 10,
  installment: 1,
  isThreeDS: false,
  minCreatedDate: createDate(-1, 0, 0, 0),
  maxCreatedDate: createDate(-1, 23, 59, 59)
};

craftgate.paymentReporting().searchPayments(request)
  .then(result => console.info('Search payments', result))
  .catch(err => console.error('Failed to search payments', err));
