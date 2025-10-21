import * as React from "react";

function FooterWithoutReactMemo() {
  // notaras que el siguiente log solo aparecerá una vez al inicio
  // pero ya no aparecerá cada que haces click en el boton
  console.log("FooterWithoutReactMemo render - solo saldra una vez al inicio");

  return <footer>Codeable - 2023</footer>;
}

export default React.memo(FooterWithoutReactMemo);
