type IncrementButtonProps = {
  onIncrement: React.MouseEventHandler<HTMLButtonElement>;
};

function IncrementButton({ onIncrement }: IncrementButtonProps) {
  return (
    <button type="button" className="button" onClick={onIncrement}>
      Increment
    </button>
  );
}

export default IncrementButton;
