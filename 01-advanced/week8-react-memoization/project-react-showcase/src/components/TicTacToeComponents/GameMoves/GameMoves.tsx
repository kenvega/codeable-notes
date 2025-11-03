import { useContext } from "react";
import { I18nContext } from "../../../contexts/I18nProvider";
import styles from "./GameMoves.module.css";

type GameMovesProps = {
  history: string[][];
  onChangeHistory: (move: number) => void;
  onReset: () => void;
};

const GameMoves = ({ history, onChangeHistory, onReset }: GameMovesProps) => {
  const { t } = useContext(I18nContext);

  return (
    <div className={styles.gameMovesContainer}>
      <button className={styles.resetButton} onClick={onReset}>
        {t("reset-button")}
      </button>
      <div className={styles.goTo}>{t("go-to")}</div>
      <div className={styles.gameMoves}>
        {history.map((_snapshot, move) => {
          let description;

          if (move > 0) {
            description = t("move") + " " + move;
          } else {
            description = t("move-0");
          }

          return (
            <div key={move} className={styles.move}>
              <button
                className={styles.moveButton}
                onClick={() => onChangeHistory(move)}
              >
                {description}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameMoves;
