
function calculateInterest(principal, years, rate) {
  return Math.ceil(principal * years * (rate / 100));
};

function getRepayAmount(principal, years, rate) {
  const interest = calculateInterest(principal, years, rate);
  return principal + interest;
};

function getEmiAmount(repayment, years) {
  return Math.ceil(repayment / (years * 12));
};

module.exports = {
  getRepayAmount,
  getEmiAmount,
}
