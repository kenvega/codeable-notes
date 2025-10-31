import { useId } from "react";
import styles from "./InputField.module.css";

type InputFieldProps = {
  label: string;
  id?: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const InputField = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  required,
}: InputFieldProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={styles.field}>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
