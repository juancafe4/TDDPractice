module.exports = class Converter {
  static getDigitName(digit) {
    switch(digit) {
      case 0:
        return '';
      case 1:
        return 'ONE';
      case 2:
        return 'TWO';
      case 3:
        return 'THREE';
      case 4:
        return 'FOUR';
      case 5:
        return 'FIVE';
      case 6:
        return 'SIX';
      case 7:
        return 'SEVEN';
      case 8:
        return 'EIGHTT';
      case 9:
        return 'NINE';
    }
  }
  static getTenthDigitName(digit) {
    switch(digit) {
      case 0:
        return '';
      case 1:
        return 'TEN';
      case 2:
        return 'TWENTY';
      case 3:
        return 'THRTY';
      case 4:
        return 'FOURTY';
      case 5:
        return 'FIFTY';
      case 6:
        return 'SIXTY';
      case 7:
        return 'SEVENTY';
      case 8:
        return 'EIGHTT';
      case 9:
        return 'NINETY';
    }
  }

  static get AND() {
    return 'AND ';
  }
  static get HUNGRED() {
    return 'HUNGRED '
  }
  static _initialize(input) {
    this.input = input;
    this.number = Number(input);
    this.divider = 100;
    this.result = '';
  }
  static _validateInput() {
    if (isNaN(this.input)) {
      throw 'Input is not a number';
    }
    if (this.number > 999|| this.number <= 0) {
      throw 'Out of range';
    }
  }
  static _getStringDigitName() {
    const divisionResult = Math.floor(this.number / this.divider);
    if (this.divider === 10) {
      return lookupDec[divisionResult] + ' ';
    } else {
      return this.getDigitName(divisionResult) + ' ';
    }
  }
  static _addExraStrings() {
    const remainderResult = this.number % this.divider;
    if (this.divider === 100) {
      return this.HUNGRED;
    }
    if (this.remainderResult !== 0 && this.divider === 100) {
      return this.AND;
    }
  }

  static _concatenateStringValues() {
    this.result += this._getStringDigitName();
    this.result += this._addExraStrings();
  }
  static _reduceValues() {
    this.number =  this.number % this.divider;
    this.divider /= 10;
  }
  static convertNumberToString(input) {
    this._initialize(input);
    this._validateInput();
    while (this.number > 0) {
      this._concatenateStringValues();
      this._reduceValues();
    }
    return this.result;
  }
}
