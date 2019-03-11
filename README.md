# Node Mercado Bitcoin :currency_exchange:

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LUAC5W7GF2BVW&source=url)
[![GitHub issues](https://img.shields.io/github/issues/rafaellaurindo/node-mercadobitcoin.svg)](https://github.com/rafaellaurindo/node-mercadobitcoin/issues)
[![npm](https://img.shields.io/npm/v/node-mercadobitcoin.svg)](https://www.npmjs.com/package/node-mercadobitcoin)
[![license](https://img.shields.io/github/license/rafaellaurindo/node-mercadobitcoin.svg)](http://spdx.org/licenses/MIT)

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

## Donation

If this project help you reduce time to develop, you can give me a cup of coffee :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LUAC5W7GF2BVW&source=url)

Or with cryptocurrencies:

- **BTC:** 1McMwihX3D2gwQqo3F9ez9namd2AB7U53B
- **BCH:** bitcoincash:qpum7gg3s3z545x2e46n5tvqf8skayh34vxe2w90ls
- **ETH:** 0x402fd9813ac5a7c0c59c325829e7b45929297d22
- **LTC:** LhyNXPDUTqFkzXe6e1MSdePGU4pbUGmyAk
- **XMR:** rnW8je5SsuFjkMSWkgfXvqZH3gLTpXxfFH (tag: 100062006)

## License

[MIT](https://choosealicense.com/licenses/mit/)