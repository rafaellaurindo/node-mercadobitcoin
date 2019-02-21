export default class MercadoBitcoinError extends Error {
  constructor(message: any) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
