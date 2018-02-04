const { assert, expect } = require('chai');
const Converter = require('./index');
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
      assert(result, 'FOUR HUNGRED');
  });
  it('should print 70 as SEVENTY', () => {;
      let result = Converter.convertNumberToString('70');
      assert(result, 'SEVENTY');
  });
  it('should print 1 as ONE', () => {;
      let result = Converter.convertNumberToString('3');
      assert(result, 'ONE');
  });
  it('should print 63 as SIXTY THREE', () => {;
      let result = Converter.convertNumberToString('63');
      assert(result, 'SIXTY THREE');
  });
  it('should print 123 as ONE HUNGRED AND TWENTY THREE', () => {;
      let result = Converter.convertNumberToString('123');
      assert(result, 'ONE HUNGRED AND TWENTY THREE');
  });
});