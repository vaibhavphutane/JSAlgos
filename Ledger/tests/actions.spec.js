const { processLoan, processPayment, processBalance } = require('../src/actions');

describe('Actions test', () => {
  it('should process loan', () => {
    const loanDB = new Map();
    const command = 'LOAN IDIDI Dale 5000 1 6';
    processLoan(command, loanDB);
    expect(loanDB.get('Dale')).toEqual({
      principal: 5000,
      emiAmount: 442,
      repayment: 5300,
      lumSumAmount: []
    });
  });

  it('should process repayment', () => {
    const loanDB = new Map();
    processLoan('LOAN IDIDI Dale 5000 1 6', loanDB);
    const command = 'PAYMENT IDIDI Dale 1000 5';
    processPayment(command, loanDB);
    expect(loanDB.get('Dale').lumSumAmount).toEqual([{ at: 5, amount: 1000 }]);
  });

  it('should process balance', () => {
    const loanDB = new Map();
    global.console = {
      log: jest.fn(),
    };
    processLoan('LOAN IDIDI Dale 5000 1 6', loanDB);
    processBalance('BALANCE IDIDI Dale 3', loanDB);
    expect(console.log).toHaveBeenCalledWith('IDIDI', 'Dale', 1326, 9);
  });
});
