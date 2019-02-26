[![npm](https://img.shields.io/npm/v/node-mercadobitcoin.svg)](https://www.npmjs.com/package/node-mercadobitcoin)
[![GitHub issues](https://img.shields.io/github/issues/rafaellaurindo/node-mercadobitcoin.svg)](https://github.com/rafaellaurindo/node-mercadobitcoin/issues)
[![license](https://img.shields.io/github/license/rafaellaurindo/node-mercadobitcoin.svg)](http://spdx.org/licenses/MIT)

# Node Mercado Bitcoin :currency_exchange:

Client to easily use [Mercado Bitcoin](https://www.mercadobitcoin.com.br/) APIs.

## Installation

Use the [npm](https://www.npmjs.com/) to install node-mercadobitcoin.

```bash
npm install -S node-mercadobitcoin
```

## Usage
```javascript
const { Api } = require('node-mercadobitcoin');
const mbtcApi = new Api();

// // Get information with the last 24 hours of Bitcoin trading in Mercado Bitcoin.
mbtcApi.getTicker('btc', ticker => console.log(ticker.ticker));

// // Get order book of Litecoin in Mercado Bitcoin.
mbtcApi.getOrderBook('ltc', orderBook => console.log(orderBook));

// // Get history of Ripple negotiations in Mercado Bitcoin.
mbtcApi.getTrades('xrp', trades => console.log(trades));

// Get the daily summary of Ethereum trades made in Mercado Bitcoin.
mbtcApi.getDaySummary('eth', '2019-02-21', daySummary => console.log(daySummary));
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Pay me a pizza :pizza:
1McMwihX3D2gwQqo3F9ez9namd2AB7U53B

## License

[MIT](https://choosealicense.com/licenses/mit/)