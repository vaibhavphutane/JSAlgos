
process.argv[2] = './test.txt';

const { processCommand } = require('../src/geektrust');
const actions = require('../src/actions');

jest.mock('../src/actions', () => {
  const actions = jest.requireActual('../src/actions');
  return {
    ...actions,
    processLoan: jest.fn(),
    processBalance: jest.fn(),
    processPayment: jest.fn(),
  }
});

describe('Should process the command', () => {
  it('should read the file', () => {
    
    processCommand('LOAN IDIDI Dale 5000 1 6');
    expect(actions.processLoan).toHaveBeenCalled();

    processCommand('BALANCE IDIDI Dale 3');
    expect(actions.processBalance).toHaveBeenCalled();

    processCommand('PAYMENT IDIDI Dale 1000 5');
    expect(actions.processPayment).toHaveBeenCalled();

  });
});