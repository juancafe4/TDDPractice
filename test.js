const { assert, expect } = require('chai');
const Converter = require('./index');
const Constants = require('./constants');
const Lookup = require('./lookup');

describe('Testing Constants...', () => {
  it('should print AND', () => {
    assert.equal(Constants.AND, 'AND ');
  });
  it('should print HUNGRED', () => {
    assert.equal(Constants.HUNGRED, 'HUNGRED ');
  });
});

describe('Testing lookup table...', () => {
  it('should throw an error when input is not a number', () => {
    expect(() => {
      Lookup.getTenthDigitName('hello');
    }).to.throw('Input is not a number');
  });
  it('should throw an error when input is not a number', () => {
    expect(() => {
      Lookup.getDigitName('hello');
    }).to.throw('Input is not a number');
  });
  it('the digit 2 should print out TWENTY', () => {
    assert.equal(Lookup.getTenthDigitName(2), 'TWENTY');
  });
  it('the digit 0 should print out empty', () => {
    expect(Lookup.getTenthDigitName(0)).to.be.empty;
  });
  it('the digit 5 should print out FIVE', () => {
    assert.equal(Lookup.getDigitName(5), 'FIVE');
  });
  it('the digit 0 should print out empty', () => {
    expect (Lookup.getDigitName(0)).to.be.empty;
  });
});
describe('Number to string character', () => {

  it('should throw an error when input is not a number', () => {
    expect(() => {
      Converter.convertNumberToString('hello');
    }).to.throw('Input is not a number');
  });

  it('should throw an error when input is greater than three digits', () => {
    expect(() => {
     Converter.convertNumberToString('1230');
    }).to.throw('Out of range');
  });

  it('should throw an error when input is less or equal to zero', () => {
    expect(() => {
      Converter.convertNumberToString('-45');
    }).to.throw('Out of range');
  });
  it('should throw an error when input is zero', () => {
    expect(() => {
      Converter.convertNumberToString('0');
    }).to.throw('Out of range');
  });
  it('should print 400 as FOUR HUNGRED', () => {;
      let result = Converter.convertNumberToString('400');
      assert.equal(result, 'FOUR HUNGRED');
  });
  it('should print 70 as SEVENTY', () => {;
      let result = Converter.convertNumberToString('70');
      assert.equal(result, 'SEVENTY');
  });
  it('should print 1 as ONE', () => {;
      let result = Converter.convertNumberToString('1');
      assert.equal(result, 'ONE');
  });
  it('should print 63 as SIXTY THREE', () => {;
      let result = Converter.convertNumberToString('63');
      assert.equal(result, 'SIXTY THREE');
  });
  it('should print 123 as ONE HUNGRED AND TWENTY THREE', () => {;
      let result = Converter.convertNumberToString('123');
      assert.equal(result, 'ONE HUNGRED AND TWENTY THREE');
  });
  it('should print 150 as ONE HUNGRED AND FIFTY', () => {;
      let result = Converter.convertNumberToString('150');
      assert.equal(result, 'ONE HUNGRED AND FIFTY');
  });
  it('should print 945 as NINE HUNGRED AND FOURTY FIVE', () => {;
      let result = Converter.convertNumberToString('945');
      assert.equal(result, 'NINE HUNGRED AND FOURTY FIVE');
  });
});