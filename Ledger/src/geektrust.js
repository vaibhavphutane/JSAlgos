const fs = require('fs');
const { processLoan, processPayment, processBalance } = require('./actions');

const loanDB = new Map();

const file = process.argv[2];

try {
  const inputCommands = fs.readFileSync(file, 'utf8');
  inputCommands.split('\n').forEach((command) => processCommand(command));
} catch (err) {
  console.log("can' read file", err);
}

function processCommand(command) {
  const [action] = command.split(' ');
  switch (action) {
    case 'LOAN':
      processLoan(command, loanDB);
      break;
    case 'PAYMENT':
      processPayment(command, loanDB);
      break;
    case 'BALANCE':
      processBalance(command, loanDB);
      break;
    default:
      console.log('Please have valid actions');
      break;
  }
};

module.exports = {
  processCommand,
}
