const test = require('ava');

const Craftgate = require('../dist');

test('installment() should return the installment adapter', t => {
  const options = {
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'http://localhost:8000'
  };

  const craftgate = new Craftgate.Client(options);
  const installmentAdapter = craftgate.installment();

  t.truthy(installmentAdapter);
  t.true(installmentAdapter instanceof Craftgate.Adapter.InstallmentAdapter);
});

test('onboarding() should return the onboarding adapter', t => {
  const options = {
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'http://localhost:8000'
  };

  const craftgate = new Craftgate.Client(options);
  const onboardingAdapter = craftgate.onboarding();

  t.truthy(onboardingAdapter);
  t.true(onboardingAdapter instanceof Craftgate.Adapter.OnboardingAdapter);
});

test('payment() should return the payment adapter', t => {
  const options = {
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'http://localhost:8000'
  };

  const craftgate = new Craftgate.Client(options);
  const paymentAdapter = craftgate.payment();

  t.truthy(paymentAdapter);
  t.true(paymentAdapter instanceof Craftgate.Adapter.PaymentAdapter);
});

test('settlementReporting() should return the settlement reporting adapter', t => {
  const options = {
    apiKey: 'api-key',
    secretKey: 'secret-key',
    baseUrl: 'http://localhost:8000'
  };

  const craftgate = new Craftgate.Client(options);
  const settlementReportingAdapter = craftgate.settlementReporting();

  t.truthy(settlementReportingAdapter);
  t.true(settlementReportingAdapter instanceof Craftgate.Adapter.SettlementReportingAdapter);
});
