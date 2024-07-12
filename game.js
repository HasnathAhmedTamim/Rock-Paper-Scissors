const readline = require("readline");
const KeyGenerator = require("./KeyGenerator");
const HMACGenerator = require("./HMACGenerator");
const Rules = require("./Rules");
const HelpTable = require("./HelpTable");

const args = process.argv.slice(2);

// Function to display error messages
const showError = (message) => {
  console.error(message);
  console.log("Usage: node game.js move1 move2 ... moveN");
  console.log("Example: node game.js Rock Paper Scissors");
  process.exit(1);
};

// Validate input
if (args.length < 3 || args.length % 2 === 0) {
  showError("Error: The number of moves must be an odd number ≥ 3.");
}

const uniqueArgs = [...new Set(args)];
if (uniqueArgs.length !== args.length) {
  showError("Error: Moves must be non-repeating.");
}

const key = KeyGenerator.generateKey();
const computerMove = args[Math.floor(Math.random() * args.length)];
const hmac = HMACGenerator.generateHMAC(key, computerMove);

console.log(`HMAC: ${hmac}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rules = new Rules(args);
const helpTable = new HelpTable(args);

const showMenu = () => {
  console.log("Available moves:");
  args.forEach((move, index) => {
    console.log(`${index + 1} - ${move}`);
  });
  console.log("0 - exit");
  console.log("? - help");
};

const getUserMove = () => {
  rl.question("Enter your move: ", (input) => {
    if (input === "0") {
      rl.close();
      return;
    }

    if (input === "?") {
      console.log(helpTable.generateTable());
      showMenu();
      getUserMove();
      return;
    }

    const userMoveIndex = parseInt(input, 10) - 1;

    if (
      isNaN(userMoveIndex) ||
      userMoveIndex < 0 ||
      userMoveIndex >= args.length
    ) {
      console.log("Invalid input. Please try again.");
      showMenu();
      getUserMove();
      return;
    }

    const userMove = args[userMoveIndex];
    const result = rules.determineWinner(userMove, computerMove);

    console.log(`Your move: ${userMove}`);
    console.log(`Computer move: ${computerMove}`);
    console.log(result);
    console.log(`HMAC key: ${key}`);

    rl.close();
  });
};

showMenu();
getUserMove();
