const { getEmiAmount, getRepayAmount } = require('../src/util');

describe('Util tests', () => {
  it('should return an emi amount', () => {
    expect(getEmiAmount(12000, 1)).toEqual(1000); 
  });
  it('should return an repayment', () => {
    expect(getRepayAmount(1000, 1, 4)).toEqual(1040); 
  })
});