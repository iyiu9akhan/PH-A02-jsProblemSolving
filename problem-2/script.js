function isElevatorSafe(weights) {
  // Write your code here
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let sumOfWeights = 0;
  for (let w = 0; w < weights.length; w++) {
    if (weights[w] < 0) {
      return "Invalid";
    }
    sumOfWeights = sumOfWeights + weights[w];
  }

  if (sumOfWeights <= 400) {
    return true;
  } else {
    return false;
  }
}

console.log(isElevatorSafe([60, 75, 50]));
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));
