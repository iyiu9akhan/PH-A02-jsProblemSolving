//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here...

    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number" || teamAGoals<0 || teamBGoals<0) {
        return "Invalid"
    }

    return teamAGoals > teamBGoals ? "Team A Won" : teamBGoals > teamAGoals ? "Team B Won" : "Draw"
    
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    // Write your code here
    if (!Array.isArray(weights)){
        return "Invalid"
    } 

    let sumOfWeights = 0;
    for (let w=0; w < weights.length; w++){
        sumOfWeights = sumOfWeights+weights[w]
    }

    if(sumOfWeights <= 400){
        return true;
    } else{
        return false;
    }
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    // Write your code here.
    if (typeof tokensUsed !== "number" || tokensUsed <0 ){
        return "Invalid"
    }
    if(tokensUsed <=500){
        return 0
    }
    let paidToken = tokensUsed-500
    let duePayment = Math.floor(paidToken/100) * 5
    return duePayment
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    // Write your code here
    if(!Array.isArray(restaurants) || restaurants.length===0){
        return "Invalid"
    }
    let popularRestaurants = restaurants[0]
    for( let i =0; i<restaurants.length; i++){
        if(restaurants[i].rating > popularRestaurants.rating){
            popularRestaurants=restaurants[i]
        }
    }
    return popularRestaurants.name.toUpperCase()
}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }

   if (times.length === 0) {
        return "Invalid";
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number"){
            return "Invalid"
        }
        total = total + times[i];
    }

  return total / times.length;
}

