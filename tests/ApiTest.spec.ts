import { expect } from 'chai';
import 'mocha';
import { Api } from '../lib';


describe('Public Api tests', () => {
  let mbtcApi: Api;

  beforeEach(() => {
    mbtcApi = new Api();
  });

  it('Should return btc ticker', (done) => {
    mbtcApi.getTicker('BTC', (ticker) => {
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('high');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('low');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('vol');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('last');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('buy');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('sell');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('date');
      done();
    });
  });

  it('Should return xrp ticker', (done) => {
    mbtcApi.getTicker('XRP', (ticker) => {
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('high');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('low');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('vol');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('last');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('buy');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('sell');
      expect(ticker).haveOwnProperty('ticker').haveOwnProperty('date');
      done();
    });
  });

  it('Should return ltc orderbook', (done) => {
    mbtcApi.getOrderBook('LTC', (orderbook) => {
      expect(orderbook).haveOwnProperty('asks');
      expect(orderbook).haveOwnProperty('bids');
      done();
    });
  });

  it('Should return bch orderbook', (done) => {
    mbtcApi.getOrderBook('BCH', (orderbook) => {
      expect(orderbook).haveOwnProperty('asks');
      expect(orderbook).haveOwnProperty('bids');
      done();
    });
  });

  it('Should return eth trades', (done) => {
    mbtcApi.getTrades('ETH', (trades) => {
      expect(trades).is.a('array');
      done();
    });
  });

  it('Should return btc trades', (done) => {
    mbtcApi.getTrades('BTC', (trades) => {
      expect(trades).is.a('array');
      done();
    });
  });

  it('Should return ltc day summary', (done) => {
    mbtcApi.getDaySummary('LTC', '2019-02-23', (daySummary) => {
      expect(daySummary).haveOwnProperty('date');
      expect(daySummary).haveOwnProperty('opening');
      expect(daySummary).haveOwnProperty('closing');
      expect(daySummary).haveOwnProperty('lowest');
      expect(daySummary).haveOwnProperty('highest');
      expect(daySummary).haveOwnProperty('volume');
      expect(daySummary).haveOwnProperty('quantity');
      expect(daySummary).haveOwnProperty('amount');
      expect(daySummary).haveOwnProperty('avg_price');
      done();
    });
  });

  it('Should return xrp day summary', (done) => {
    mbtcApi.getDaySummary('XRP', '2019-02-23', (daySummary) => {
      expect(daySummary).haveOwnProperty('date');
      expect(daySummary).haveOwnProperty('opening');
      expect(daySummary).haveOwnProperty('closing');
      expect(daySummary).haveOwnProperty('lowest');
      expect(daySummary).haveOwnProperty('highest');
      expect(daySummary).haveOwnProperty('volume');
      expect(daySummary).haveOwnProperty('quantity');
      expect(daySummary).haveOwnProperty('amount');
      expect(daySummary).haveOwnProperty('avg_price');
      done();
    });
  });
});