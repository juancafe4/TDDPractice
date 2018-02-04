/*
  @author: JUAN CARLOS FERREL
  02/04/2018
 */

const getDigitName = function (digit) {
  if (isNaN(digit)) {
    throw 'Input is not a number';
  }
  switch (digit) {
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
    default:
      return '';
  }
};

const getTenthDigitName = function (digit) {
  if (isNaN(digit)) {
    throw 'Input is not a number';
  }
  switch (digit) {
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
    default:
      return '';
  }
};

module.exports = { getDigitName, getTenthDigitName };
