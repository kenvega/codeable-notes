import styles from "./ColorGame.module.css";
import { getRandomColors, getStatus, rgbString, statusMessage } from "./utils";
import { useState } from "react";
import { rgbColors } from "../../constants";
import Button from "../Button";

function ColorGame() {
  const [numOfColors, setNumOfColors] = useState(6);
  const [colors, setColors] = useState<number[][]>(
    getRandomColors(numOfColors)
  );
  const [attempts, setAttempts] = useState<number[]>([]);

  const [target, setTarget] = useState(
    Math.floor(Math.random() * colors.length)
  );

  function handleReset() {
    const nextColors = getRandomColors(numOfColors);
    // reset game
    setAttempts([]);
    setColors(nextColors);
    setTarget(Math.floor(Math.random() * nextColors.length));
  }

  function handleChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const newNumOfColors = parseInt(event.target.value, 10);
    const nextColors = getRandomColors(newNumOfColors);

    setNumOfColors(newNumOfColors);
    // reset game
    setAttempts([]);
    setColors(nextColors);
    setTarget(Math.floor(Math.random() * nextColors.length));
  }

  const status = getStatus(attempts, target, numOfColors);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Color Game</h1>
      <p className={styles.description}>
        Guess which color correspond to the following RGB code
      </p>

      <div className={styles["rgb-wrapper"]}>
        {colors[target].map((colorPart, index) => {
          return (
            <div
              key={index}
              className={styles.rgb}
              style={{ borderColor: rgbColors[index] }}
            >
              <p className={styles["color-number"]}>{colorPart}</p>
              <p>{rgbColors[index]}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.dashboard}>
        <div className={styles["number-input"]}>
          <label htmlFor="colors"># Colors</label>
          <input
            id="colors"
            type="number"
            value={numOfColors}
            onChange={handleChangeNumber}
            step={3}
            min={3}
            max={9}
          />
        </div>
        <p className={styles["game-status"]}>{statusMessage[status]}</p>
        <Button onClick={handleReset}>Reset</Button>
      </div>
      <div className={styles.squares}>
        {colors.map((color, index) => {
          const backgroundColor =
            status === "win" ? rgbString(colors[target]) : rgbString(color);
          const opacity =
            attempts.includes(index) && status !== "win" ? "0" : "100";

          return (
            <button
              key={index}
              style={{ backgroundColor, opacity }}
              disabled={status !== "playing"}
              onClick={() => {
                setAttempts([...attempts, index]);
              }}
              className={styles.square}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ColorGame;
