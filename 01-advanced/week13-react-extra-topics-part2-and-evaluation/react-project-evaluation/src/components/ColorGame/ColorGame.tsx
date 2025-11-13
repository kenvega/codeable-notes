import styles from "./ColorGame.module.css";
import { getRandomColors, getStatus, rgbString, statusMessage } from "./utils";
import { useEffect, useState } from "react";
import Button from "../Button";

function ColorGame() {
  const [numOfColors, setNumOfColors] = useState(6);
  const [colors, setColors] = useState<number[][]>(
    getRandomColors(numOfColors)
  );
  const [attempts, setAttempts] = useState<number[]>([]);

  const [target, setTarget] = useState(
    Math.floor(Math.random() * colors.length) // este valor no deberia recalcularse mas abajo. deberia ser el mismo
  );
  useEffect(() => {
    setTarget(Math.floor(Math.random() * colors.length)); // calcular este valor aleatoriamente cuando ya se hace arriba esta mal
  }, [colors]);

  function handleReset() {
    setAttempts([]);
    setColors(getRandomColors(numOfColors));
    setTarget(Math.floor(Math.random() * colors.length));
  }

  function handleChangeNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const newNumOfColors = parseInt(event.target.value, 10);
    setNumOfColors(newNumOfColors);
    // reset game after new number of colors
    setAttempts([]);
    setColors(getRandomColors(newNumOfColors));
  }

  const status = getStatus(attempts, target, numOfColors);

  console.log("colors[target]: ", colors[target]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Color Game</h1>
      <p className={styles.description}>
        Guess which color correspond to the following RGB code
      </p>

      {/* TODO: aqui usar un map y poner dentro de un container el valor con el numero */}
      <div className={styles["rgb-wrapper"]}>{rgbString(colors[target])}</div>
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
          const backgroundColor = rgbString(color);
          const opacity = attempts.includes(index) ? "0" : "100";

          return (
            <button
              key={index}
              style={{ backgroundColor, opacity }}
              onClick={() => {
                /* completar */
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
