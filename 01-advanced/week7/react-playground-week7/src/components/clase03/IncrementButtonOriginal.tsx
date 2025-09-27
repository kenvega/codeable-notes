type IncrementButtonProps = {
  onIncrement: () => void;
};

function IncrementButton({ onIncrement }: IncrementButtonProps) {
  return (
    <button className="button" onClick={onIncrement}>
      Increment
    </button>
  );
}

export default IncrementButton;
