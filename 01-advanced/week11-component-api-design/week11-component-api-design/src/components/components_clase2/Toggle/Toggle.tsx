import { useId } from "react";
import styles from "./Toggle.module.css";

type ToggleProps = {
  label: string;
  checked: boolean;
  onClick: () => void;
};

const Toggle = ({ label, checked, onClick }: ToggleProps) => {
  const id = useId();

  // mueve el circulo de izquierda a derecha
  const ballStyle = {
    transform: checked ? `translateX(100%)` : `translateX(0%)`,
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <button
        id={id}
        className={styles.toggle}
        type="button"
        aria-pressed={checked}
        onClick={onClick}
      >
        <span className={styles.ball} style={ballStyle} />
      </button>
    </div>
  );
};

export default Toggle;
