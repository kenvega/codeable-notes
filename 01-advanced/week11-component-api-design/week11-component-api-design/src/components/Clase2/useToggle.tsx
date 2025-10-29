import * as React from "react";

type useToggleReturnType = [boolean, () => void];

function useToggle(initialValue = false): useToggleReturnType {
  if (typeof initialValue !== "boolean") {
    console.warn("Invalid type for useToggle");
  }

  const [value, setValue] = React.useState(initialValue);

  function toggleValue() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toggleValue];
}

export default useToggle;
