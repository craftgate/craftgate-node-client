var http = require('http');
var process = require('process');

var Craftgate = require('@craftgate/craftgate');

function assert(expr, message) {
  if (!expr) {
    console.error('Check failed', message);
    return process.exit(1);
  }

  console.info('Check OK', message);
}

function assertAsync(fn, message) {
  try {
    fn(function (err, result) {
      if (err) {
        console.error('Async check failed', message, err);
        return process.exit(2);
      }

      console.info('Async check OK', message, result);
    });
  } catch (err) {
    console.error('Async check failed before being executed', message, err);
    process.exit(3)
  }
}

function isConstructor(fn) {
  return fn && (typeof fn === 'function') && fn.prototype && (fn.prototype.constructor === fn);
}

assert(!!Craftgate, 'Craftgate must not be false');
assert(isConstructor(Craftgate.Client), 'Craftgate.Client must be a constructor');

assert(!!Craftgate.Model, 'Craftgate.Model must not be false')
assert(Object.keys(Craftgate.Model).length > 0, 'Craftgate.Model must not be empty');

assert(!!Craftgate.Adapter, 'Craftgate.Adapter must not be false')
assert(Object.keys(Craftgate.Adapter).length > 0, 'Craftgate.Adapter must not be empty');

assert(!!Craftgate.CraftgateError, 'Craftgate.CraftgateError must not be false');
assert(isConstructor(Craftgate.Client), 'Craftgate.CraftgateError must be a constructor');

// Sends a request to a local server and checks the x-client-version header against the version CI packed the library with.
function testClientVersionHeader(callback) {
  var expected = 'craftgate-node-client:' + process.env.EXPECTED_CLIENT_VERSION;
  var server = http.createServer(function (req, res) {
    var actual = req.headers['x-client-version'];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({data: {}}));
    server.close();
    callback(actual === expected ? null : new Error('Expected ' + expected + ' but was ' + actual), actual);
  });
  server.listen(0, '127.0.0.1', function () {
    var client = new Craftgate.Client({
      apiKey: 'api-key',
      secretKey: 'secret-key',
      baseUrl: 'http://127.0.0.1:' + server.address().port
    });
    client.installment().retrieveBinNumber('525864').catch(function () {});
  });
}

assertAsync(testClientVersionHeader, 'x-client-version header must carry the packed version');
