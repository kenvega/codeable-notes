import React from "react";

const ToggleWithoutHook = () => {
  const [active, setActive] = React.useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    <button onClick={toggle}>{active ? "Toggle ON" : "Toggle OFF"}</button>
  );
};

export default ToggleWithoutHook;
