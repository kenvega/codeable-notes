import { useState } from "react";

const Toggle = () => {
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    <button onClick={toggle}>{active ? "Toggle ON" : "Toggle OFF"}</button>
  );
};

export default Toggle;
