const test = require('ava');
const nock = require('nock');

const Craftgate = require('../../dist');

const installmentAdapter = new Craftgate.Adapter.InstallmentAdapter({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

test('should retrieve installments', async t => {
  const scope = nock('http://localhost:8000')
  .get('/installment/v1/installments?binNumber=123456&price=40.808&currency=TRY')
  .reply(200, {
    data: {
      binNumber: '123456',
      price: 40.8080,
      cardType: 'CREDIT_CARD',
      cardAssociation: 'MASTER_CARD',
      cardBrand: 'Axess',
      bankName: 'Akbank',
      bankCode: 46,
      force3ds: true,
      commercial: true,
      installmentPrices: [
        {
          installmentPrice: 40.8080,
          totalPrice: 40.8080,
          installmentNumber: 1
        },
        {
          installmentPrice: 22.20,
          totalPrice: 44.40,
          installmentNumber: 2
        }
      ]
    }
  });

  const request = {
    binNumber: 123456,
    price: 40.8080,
    currency: 'TRY'
  };

  const result = await installmentAdapter.searchInstallments(request)
  t.is(result.binNumber, '123456')
  t.is(result.price, 40.8080)
  t.is(result.cardType, 'CREDIT_CARD')
  t.is(result.cardAssociation, 'MASTER_CARD')
  t.is(result.cardBrand, 'Axess')
  t.is(result.bankName, 'Akbank')
  t.is(result.bankCode, 46)
  t.is(result.force3ds, true)
  t.is(result.commercial, true)
  t.is(result.installmentPrices[0].installmentNumber, 1)
  t.is(result.installmentPrices[1].installmentNumber, 2)
});

test('should retrieve bin number', async t => {
  const scope = nock('http://localhost:8000')
  .get('/installment/v1/bins/123456')
  .reply(200, {
    data: {
      binNumber: '123456',
      cardType: 'CREDIT_CARD',
      cardAssociation: 'MASTER_CARD',
      cardBrand: 'Axess',
      bankName: 'Akbank',
      bankCode: 46,
      commercial: true
    }
  });

  const result = await installmentAdapter.retrieveBinNumber('123456')
  t.is(result.binNumber, '123456')
  t.is(result.cardType, 'CREDIT_CARD')
  t.is(result.cardAssociation, 'MASTER_CARD')
  t.is(result.cardBrand, 'Axess')
  t.is(result.bankName, 'Akbank')
  t.is(result.bankCode, 46)
  t.is(result.commercial, true)
});
