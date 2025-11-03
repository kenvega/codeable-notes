import { CellValue } from "../components/TicTacToeComponents/TicTacToe";

export function calculateTicTacToeWinner(snapshot: CellValue[]) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    if (
      snapshot[a] &&
      snapshot[a] === snapshot[b] &&
      snapshot[a] === snapshot[c]
    ) {
      return snapshot[a];
    }
  }

  return null;
}
