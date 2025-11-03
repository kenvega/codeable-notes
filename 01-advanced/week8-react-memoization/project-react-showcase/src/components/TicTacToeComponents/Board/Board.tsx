import { useContext } from "react";
import { calculateTicTacToeWinner } from "../../../helpers/calculateTicTacToeWinner";
import Cell from "../Cell";
import styles from "./Board.module.css";
import { I18nContext } from "../../../contexts/I18nProvider";
import { CellValue } from "../TicTacToe";

type BoardProps = {
  isXNext: boolean;
  snapshot: CellValue[];
  onPlay: (nextSnapshot: CellValue[]) => void;
};

const Board = ({ isXNext, snapshot, onPlay }: BoardProps) => {
  const { t } = useContext(I18nContext);

  const winner = calculateTicTacToeWinner(snapshot);

  let gameStatus;

  if (winner) {
    gameStatus = t("won-game") + ": " + winner;
  } else {
    gameStatus = t("next-player") + ": " + (isXNext ? "X" : "O");
  }

  function handleClick(i: number) {
    if (calculateTicTacToeWinner(snapshot) || snapshot[i]) {
      return;
    }

    const nextSnapshot = snapshot.slice();

    if (isXNext) {
      nextSnapshot[i] = "X";
    } else {
      nextSnapshot[i] = "O";
    }
    onPlay(nextSnapshot);
  }

  return (
    <div className={styles.board}>
      <div className={styles.gameStatus}>{gameStatus}</div>
      <div className={styles.boardGame}>
        <div className={styles.boardRow}>
          <Cell value={snapshot[0]} onCellClick={() => handleClick(0)} />
          <Cell value={snapshot[1]} onCellClick={() => handleClick(1)} />
          <Cell value={snapshot[2]} onCellClick={() => handleClick(2)} />
        </div>
        <div className={styles.boardRow}>
          <Cell value={snapshot[3]} onCellClick={() => handleClick(3)} />
          <Cell value={snapshot[4]} onCellClick={() => handleClick(4)} />
          <Cell value={snapshot[5]} onCellClick={() => handleClick(5)} />
        </div>
        <div className={styles.boardRow}>
          <Cell value={snapshot[6]} onCellClick={() => handleClick(6)} />
          <Cell value={snapshot[7]} onCellClick={() => handleClick(7)} />
          <Cell value={snapshot[8]} onCellClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
};

export default Board;
