# Node Mercado Bitcoin

Client to easily use [Mercado Bitcoin](https://www.mercadobitcoin.com.br/) APIs.

## Installation

Use the [npm](https://www.npmjs.com/) to install node-mercadobitcoin.

```bash
npm install -S node-mercadobitcoin
```

## Usage
```javascript
const MercadoBitcoin = require('node-mercadobitcoin').default;
const mbtcApi = new MercadoBitcoin.Api();

// Get information with the last 24 hours of Bitcoin trading in Mercado Bitcoin.
mbtcApi.getTicker('btc', ticker => console.log(ticker.ticker));

// Get order book of Litecoin in Mercado Bitcoin.
mbtcApi.getOrderBook('ltc', ticker => console.log(ticker.ticker));

// Get history of Ripple negotiations in Mercado Bitcoin.
mbtcApi.getTrades('xrp', trades => console.log(trades));

// Get the daily summary of Ethereum trades made in Mercado Bitcoin.
mbtcApi.getDaySummary('eth', trades => console.log(trades));
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)