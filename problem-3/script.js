function calculateAiCost(tokenUsed) {
  if (typeof tokenUsed !== "number" || tokenUsed < 0) {
    return "Invalid";
  }
  if (tokenUsed <= 500) {
    return 0;
  }
  let paidToken = tokenUsed - 500;
  let duePayment = Math.floor(paidToken / 100) * 5;
  return duePayment;
}

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));
