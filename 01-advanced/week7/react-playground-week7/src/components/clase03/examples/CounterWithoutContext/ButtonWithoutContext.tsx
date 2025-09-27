type ButtonProps = {
  onIncrement: () => void;
};

const ButtonWithoutContext = ({ onIncrement }: ButtonProps) => {
  return (
    <button type="button" className="button" onClick={onIncrement}>
      Increment button
    </button>
  );
};

export default ButtonWithoutContext;
