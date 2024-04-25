export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('has to be str');
    } else if (typeof code !== 'string') {
      throw new TypeError('has to be str');
    }

    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
