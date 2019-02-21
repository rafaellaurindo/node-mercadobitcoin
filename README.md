# Node Mercado Bitcoin

Client to easily use [Mercado Bitcoin](https://www.mercadobitcoin.com.br/) APIs.

## Installation

Use the [npm](https://www.npmjs.com/) to install node-mercadobitcoin.

```bash
npm install -S node-mercadobitcoin
```

## Usage

```javascript
const MercadoBitcoin = require('node-mercadobitcoin');
const mercadoBitcoin = new MercadoBitcoin();

mercadoBitcoin.getTicker('btc', ticker => {
  console.log(ticker.ticker);
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
