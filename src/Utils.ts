import MercadoBitcoinError from './Errors/MercadoBitcoinError';

export default class Utils {
  public static throwErrorIfIsNotAValidCurrency(currency: string): void {
    const validCurrencies: string[] = [
      'bch', // Bitcoin
      'btc', // Bitcoin Cash
      'eth', // Ethereum
      'ltc', // Litcoin
      'xrp', // Ripple
    ];

    if (!validCurrencies.includes(currency.toLowerCase())) {
      throw new MercadoBitcoinError(`"${currency}" is not a valid currency!`);
    }
  }
}
