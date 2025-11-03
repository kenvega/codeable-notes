import { useId, type InputHTMLAttributes } from "react";
import styles from "./InputFieldDelegated.module.css";

// for the type: we use Omit to exclude the 'id' property from the standard input props because we are handling it separately
type InputFieldDelegatedProps = {
  label: string;
  id?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;

const InputFieldDelegated = ({
  label,
  id,
  ...delegated
}: InputFieldDelegatedProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={styles.field}>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...delegated} />
    </div>
  );
};

export default InputFieldDelegated;
