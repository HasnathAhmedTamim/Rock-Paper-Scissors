class HelpTable {
  constructor(moves) {
    this.moves = moves;
  }

  generateTable() {
    const moveCount = this.moves.length;
    let table = " ".repeat(10);

    // Add column headers
    this.moves.forEach((move) => {
      table += move.padStart(10, " ") + " ";
    });

    table += "\n";

    // Add rows
    this.moves.forEach((move, i) => {
      table += move.padStart(10, " ") + " "; // Row header
      this.moves.forEach((_, j) => {
        if (i === j) {
          table += "Draw".padStart(10, " ") + " ";
        } else {
          const result =
            i < j
              ? j - i <= Math.floor(moveCount / 2)
                ? "Win"
                : "Lose"
              : i - j > Math.floor(moveCount / 2)
              ? "Win"
              : "Lose";
          table += result.padStart(10, " ") + " ";
        }
      });
      table += "\n";
    });

    return table;
  }
}

module.exports = HelpTable;
