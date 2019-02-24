import * as request from 'request';

import MercadoBitcoinError from './Errors/MercadoBitcoinError';
import Utils from './Utils';

const ENDPOINT_API = 'https://www.mercadobitcoin.com.br/api';

export default class Api {
  /**
   * Get information with the last 24 hours of trading of a cryptocurrency in Mercado Bitcoin.
   *
   * @param {string} currency Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @param {Function} callback Callback function.
   */
  public getTicker(currency: string, callback: () => void): void {
    Utils.throwErrorIfIsNotAValidCurrency(currency);
    this._callMercadoBitcoinApi('ticker', currency, callback);
  }

  /**
   * Get order book of a cryptocurrency in Mercado Bitcoin.
   *
   * @param {string} currency Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @param {Function} callback Callback function.
   */
  public getOrderBook(currency: string, callback: () => void): void {
    Utils.throwErrorIfIsNotAValidCurrency(currency);
    this._callMercadoBitcoinApi('orderbook', currency, callback);
  }

  /**
   * Get History of negotiations of a cryptocurrency in Mercado Bitcoin.
   *
   * @param {string} currency Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @param {Function} callback Callback function.
   */
  public getTrades(currency: string, callback: () => void): void {
    Utils.throwErrorIfIsNotAValidCurrency(currency);
    this._callMercadoBitcoinApi('trades', currency, callback);
  }

  /**
   * Get the daily summary of trades made in Mercado Bitcoin.
   *
   * @param {string} currency Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @param {string} date Date in format: YYYY-MM-DD. Eg.: 2019-02-23.
   * @param {Function} callback Callback function.
   */
  public getDaySummary(currency: string, date: string, callback: () => void): void {
    Utils.throwErrorIfIsNotAValidCurrency(currency);
    date = date.replace(/-/g,'/');
    this._callMercadoBitcoinApi('day-summary', currency, callback, date);
  }

  /**
   * Method where the call is made to the API of Mercado Bitcoin.
   *
   * @param {string} method Method of API
   * @param {string} currency Acronym for the digital currency: BCH, BTC, ETH, LTC, XRP.
   * @param {Function} callback Callback function.
   */
  private _callMercadoBitcoinApi(
    method: string,
    currency: string,
    callback: (...args: any[]) => void,
    optionals: string = '',
  ): void {
    const options = {
      headers: { Accept: 'application/json' },
      url: `${ENDPOINT_API}/${currency}/${method}/${optionals}`,
    };
    request.get(options, (err, response, body) => {
      try {
        callback(JSON.parse(body));
      } catch {
        const error = {
          code: response.statusCode,
          message: response.statusMessage,
        };
        throw new MercadoBitcoinError(JSON.stringify(error));
      }
    });
  }
}
