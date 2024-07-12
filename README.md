## Project Explanation

This project implements a versatile Rock-Paper-Scissors game capable of handling an arbitrary number of moves, provided as command-line arguments. Each move is treated uniquely, ensuring fairness through the use of cryptographically strong random keys and HMAC (Hash-based Message Authentication Code). The game's core functionality is encapsulated in several classes: `KeyGenerator` for generating secure random keys, `HMACGenerator` for computing HMAC using the generated key and computer's move, `Rules` for determining game outcomes based on user and computer moves, and `HelpTable` for generating an ASCII table that visually illustrates which moves win against others.

### Usage

To play the game, Node.js must be installed on your system. Launch the game by executing `node game.js` followed by an odd number of non-repeating moves. For example, running `node game.js Rock Paper Scissors Lizard Spock` initializes a game with five distinct moves. Upon launch, the game displays an HMAC key for verification, prompts the user to select a move from a menu, and provides options to view a help table or exit.

### Files

- **`game.js`**: Main script orchestrating the game flow and user interactions.
- **`KeyGenerator.js`**: Generates a secure random key for HMAC computation.
- **`HMACGenerator.js`**: Computes HMAC using the generated key and computer's move.
- **`Rules.js`**: Implements game rules to determine outcomes based on user and computer moves.
- **`HelpTable.js`**: Constructs an ASCII table illustrating move relationships for user reference.

### Example Interaction

Upon running the game with moves "Rock Paper Scissors Lizard Spock", the user is presented with an HMAC key and a menu of available moves. Selecting a move, such as "Scissors", results in a comparison with the computer's move (e.g., "Rock"), and the game declares the winner along with the original HMAC key for verification.

### Video Demonstration and Repository

For a visual demonstration of the game's functionality, please refer to the [video demonstration](#link-to-video). The complete source code for this project can be found on [GitHub](#link-to-repository).

### Author

[HasnathAhmedTamim]
