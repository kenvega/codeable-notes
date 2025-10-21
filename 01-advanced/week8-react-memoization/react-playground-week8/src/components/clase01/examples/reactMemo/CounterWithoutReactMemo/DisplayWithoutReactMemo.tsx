function DisplayWithoutReactMemo({ count }: { count: number }) {
  console.log("DisplayWithoutReactMemo render");

  return <h2>{count}</h2>;
}

export default DisplayWithoutReactMemo;
