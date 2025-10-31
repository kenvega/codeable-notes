import styles from "./BadInputField.module.css";

type BadInputFieldProps = {
  label: string;
  id: string;
  name: string;
};

// not exactly bad but it can be improved by delegating props
const BadInputField = ({ label, id, name }: BadInputFieldProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={name} />
    </div>
  );
};

export default BadInputField;
