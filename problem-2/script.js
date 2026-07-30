function isElevatorSafe(weights) {
  // Write your code here
  if (!Array.isArray(weights)) {
    return "invalid";
  }

  let sumOfWeights = 0;
  for (let w = 0; w < weights.length; w++) {
    sumOfWeights = sumOfWeights + weights[w];
  }

  if ( sumOfWeights <= 400){
    return true;
  }else {
    return false;
  }

}

console.log(isElevatorSafe([40, 50, 70,]));

