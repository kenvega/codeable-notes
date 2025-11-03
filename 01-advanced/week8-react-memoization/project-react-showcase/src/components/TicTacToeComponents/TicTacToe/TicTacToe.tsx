import { useState } from "react";
import styles from "./TicTacToe.module.css";
import Board from "../Board";
import GameMoves from "../GameMoves";

export type CellValue = "X" | "O" | null;

const TicTacToe = () => {
  // history is an array of arrays. each array represents how the board was filled
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  // player that uses 'X' always starts
  const isXNext = currentMove % 2 === 0;
  const currentSnapshot = history[currentMove];

  // add another array to the history and change the count for the moves of the game
  function handlePlay(nextSnapshot: CellValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSnapshot];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const handleChangeHistory = (move: number) => {
    setCurrentMove(move);
  };

  const handleResetBoard = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  return (
    <div className={styles.game}>
      <Board isXNext={isXNext} snapshot={currentSnapshot} onPlay={handlePlay} />
      <GameMoves
        history={history}
        onChangeHistory={handleChangeHistory}
        onReset={handleResetBoard}
      />
    </div>
  );
};

export default TicTacToe;
