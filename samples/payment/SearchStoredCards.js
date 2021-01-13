const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  cardAlias: 'My YKB Card',
  cardBankName: 'YAPI VE KREDİ BANKASI A.Ş.',
  cardBrand: 'World',
  cardAssociation: Craftgate.Model.CardAssociation.MasterCard,
  cardToken: 'd9b19d1a-243c-43dc-a498-add08162df72',
  cardUserKey: 'c115ecdf-0afc-4d83-8a1b-719c2af19cbd',
  cardType: Craftgate.Model.CardType.CreditCard
};

craftgate.payment().searchStoredCards(request)
  .then(results => console.info('Search stored card search results', results))
  .catch(err => console.err('Failed to search stored card', err));
