import * as React from "react";

function SpecialButton({ onClick, children }) {
  console.log("SpecialButton render");

  return (
    <button className="special" onClick={onClick}>
      {children}
    </button>
  );
}

export default React.memo(SpecialButton);
