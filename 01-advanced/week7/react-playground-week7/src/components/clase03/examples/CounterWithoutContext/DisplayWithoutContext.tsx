type DisplayProps = {
  count: number;
};

const DisplayWithoutContext = ({ count }: DisplayProps) => {
  return <p className="count">Count: {count}</p>;
};

export default DisplayWithoutContext;
