import styles from "./Cell.module.css";
import { CellValue } from "../TicTacToe";

type CellProps = {
  value: CellValue;
  onCellClick: () => void;
};

const Cell = ({ value, onCellClick }: CellProps) => {
  return (
    <button className={styles.square} onClick={onCellClick}>
      {value}
    </button>
  );
};

export default Cell;
