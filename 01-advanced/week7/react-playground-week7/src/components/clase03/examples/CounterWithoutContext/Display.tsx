type DisplayProps = {
  count: number;
};

function Display({ count }: DisplayProps) {
  return <p className="count">{count}</p>;
}

export default Display;
