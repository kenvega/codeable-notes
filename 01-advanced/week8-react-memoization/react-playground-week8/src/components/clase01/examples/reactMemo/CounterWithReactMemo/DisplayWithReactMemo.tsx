import * as React from "react";

function CounterWithReactMemo({ count }: { count: number }) {
  console.log("CounterWithReactMemo render");

  return <h2>{count}</h2>;
}

export default React.memo(CounterWithReactMemo);
