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

  it('should just to the exact hundredth', () => {;
      let result = Converter.convertNumberToString('400');
      assert(result, 'FOUR HUNGRED');
  });
});