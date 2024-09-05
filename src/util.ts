/**
 * calculateBoardState checks to see if there is a winner or tie and returns
 * the winner and colors the cells to highlight the winning combination
 *
 * Example:
 * const squares = ["X",      "O",       undefined,
 *                 "O",       "X",       undefined,
 *                 undefined, undefined, "X"];
 * calculateBoardState(squares);
 * returns {
 *   winner: "X",
 *   colors: ["teal",    undefined, undefined,
 *           undefined, "teal",    undefined,
 *           undefined, undefined, "teal"]
 * }
 */

type BoardState = {
  winner: "X" | "O" | "XO" | undefined;
  colors: string[];
};

export function calculateBoardState(squares): BoardState {
  //All possible winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //Check for a winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      const endState = Array(9).fill(undefined);
      endState[a] = "teal";
      endState[b] = "teal";
      endState[c] = "teal";
      return {
        winner: squares[a],
        colors: endState,
      };
    }
  }

  //Check if there are still cells that have not been played yet
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      return { winner: undefined, colors: Array(9).fill(undefined) };
    }
  }

  // No more cells left to play, game ends in a tie
  return { winner: "XO", colors: Array(9).fill("yellow") };
}
