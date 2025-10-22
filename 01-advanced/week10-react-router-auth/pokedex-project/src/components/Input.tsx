type InputProps = {
  id?: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
};

const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}: InputProps) => {
  return (
    <div>
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
