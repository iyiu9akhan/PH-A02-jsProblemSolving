function matchWinner(teamAGoals, teamBGoals) {
  if (
    typeof teamAGoals !== "number" ||
    typeof teamBGoals !== "number" ||
    teamAGoals < 0 ||
    teamBGoals < 0
  ) {
    return "Invalid";
  }

  //   way one
  // if(teamAGoals>teamBGoals){
  //     return "Team A Won"
  // } else if (teamAGoals<teamBGoals){
  //     return "Team B Won"
  // } else {
  //     return "Draw"
  // }

  //   way two
  return teamAGoals > teamBGoals
    ? "Team A Won"
    : teamBGoals > teamAGoals
      ? "Team B Won"
      : "Draw";
}

console.log(matchWinner(2, 1));
console.log(matchWinner(1, 3));
console.log(matchWinner(2, 2));
console.log(matchWinner("3", 2));
