class Rules {
  constructor(moves) {
    this.moves = moves;
    this.moveCount = moves.length;
  }

  determineWinner(userMove, computerMove) {
    if (userMove === computerMove) return "Draw";

    const userIndex = this.moves.indexOf(userMove);
    const computerIndex = this.moves.indexOf(computerMove);
    const half = Math.floor(this.moveCount / 2);

    if (
      (userIndex > computerIndex && userIndex - computerIndex <= half) ||
      (computerIndex > userIndex && computerIndex - userIndex > half)
    ) {
      return "User wins!";
    } else {
      return "Computer wins!";
    }
  }
}

module.exports = Rules;
