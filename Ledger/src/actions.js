const { getRepayAmount, getEmiAmount } = require('./util');

function processLoan(command, loanDB) {
  const [_, bankName, borrowerName, principal, years, rate] =
    command.split(' ');

  const repayment = getRepayAmount(
    Number(principal),
    Number(years),
    Number(rate)
  );
  const emiAmount = getEmiAmount(repayment, years);
  loanDB.set(borrowerName, {
    principal: Number(principal),
    emiAmount,
    repayment,
    lumSumAmount: [],
  });
}

function processPayment(command, loanDB) {
  const [_, bankName, borrowerName, lumSumAmount, emiNumbers] =
    command.split(' ');
  const borrowerDetails = loanDB.get(borrowerName);
  borrowerDetails.lumSumAmount.push({
    at: Number(emiNumbers),
    amount: Number(lumSumAmount),
  });
}

function processBalance(command, loanDB) {
  const [_, bankName, borrowerName, emiNo] = command.split(' ');
  const borrowerDetails = loanDB.get(borrowerName);
  const lumSumAmounts = borrowerDetails.lumSumAmount
    .filter((a) => a.at <= emiNo)
    .reduce((sum, a) => sum + a.amount, 0);
  const paidAmount = lumSumAmounts + borrowerDetails.emiAmount * Number(emiNo);
  const numberOfEmis = Math.ceil(
    (borrowerDetails.repayment - paidAmount) / borrowerDetails.emiAmount
  );
  console.log(bankName, borrowerName, paidAmount, numberOfEmis);
}

module.exports = {
  processLoan,
  processBalance,
  processPayment,
};
