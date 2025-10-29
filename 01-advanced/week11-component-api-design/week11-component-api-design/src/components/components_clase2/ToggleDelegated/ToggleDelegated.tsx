import { useId } from "react";
import styles from "./ToggleDelegated.module.css";
import clsx from "clsx";

type ToggleDelegatedProps = {
  label: string;
  checked: boolean;
  onClick: () => void;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

const ToggleDelegated = ({
  label,
  checked,
  onClick,
  ...delegated
}: ToggleDelegatedProps) => {
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
        {...delegated} // es necesario que esto vaya primero para que no sobreescriba props como className
        id={id}
        type="button"
        aria-pressed={checked}
        onClick={onClick}
        className={clsx(styles.toggle, styles[delegated.className || ""])} // merge styles with delegated className
      >
        <span className={styles.ball} style={ballStyle} />
      </button>
    </div>
  );
};

export default ToggleDelegated;
