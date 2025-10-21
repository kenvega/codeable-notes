import * as React from "react";

function FooterCounterWithReactMemo() {
  console.log("FooterCounterWithReactMemo render");

  return <footer>Codeable - 2023</footer>;
}

export default React.memo(FooterCounterWithReactMemo);
