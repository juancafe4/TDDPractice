/*
  @author: JUAN CARLOS FERREL
  02/04/2018
 */

const { AND, HUNGRED } = require('./constants');
const { getDigitName, getTenthDigitName } = require('./lookup');

module.exports = class Converter {
  static convertNumberToString(input) {
    this._initialize(input);
    this._validateInput();
    while (this.number > 0) {
      this._concatenateStringValues();
      this._reduceValues();
    }
    return this.result.trim();
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
    if (this.number > 999 || this.number <= 0) {
      throw 'Out of range';
    }
  }
  static _concatenateStringValues() {
    this._getStringDigitName();
  }
  static _reduceValues() {
    this.number = this.number % this.divider;
    this.divider /= 10;
  }
  static _getStringDigitName() {
    const divisionResult = Math.floor(this.number / this.divider);
    if (divisionResult !== 0) {
      this._addDigit(divisionResult);
      this._addExraStrings();
    }
  }

  static _addDigit(divisionResult) {
    if (this.divider === 10) {
      this.result += getTenthDigitName(divisionResult) + ' ';
    } else {
      this.result += getDigitName(divisionResult) + ' ';
    }
  }
  static _addExraStrings() {
    const remainderResult = this.number % this.divider;
    if (this.divider === 100) {
      this.result += HUNGRED;
    }
    if (remainderResult !== 0 && this.divider === 100) {
      this.result += AND;
    }
  }
};
