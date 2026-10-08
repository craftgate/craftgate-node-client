const Craftgate = require('../../dist');

const craftgate = new Craftgate.Client({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'https://sandbox-api.craftgate.io'
});

const request = {
  gsmNumber: '5555555555',
  userId: 'bkm-express-user-id'
};

craftgate.bkmExpress().generateToken(request)
    .then(result => console.info('BKM Express token successfully generated', result))
    .catch(err => console.error('BKM Express token generation failed', err));
