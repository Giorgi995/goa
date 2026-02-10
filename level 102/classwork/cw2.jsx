import { useState } from "react";

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => {
      if (typeof prev === "boolean") {
        return !prev;
      }
      if (prev === "light") {
        return "dark";
      }
      if (prev === "dark") {
        return "light";
      }
      return prev;
    });
  };

  return [value, toggle];
}

export default useToggle;

import useToggle from "./useToggle";

function App() {
  const [mode, toggleMode] = useToggle("light");

  return (
    <div>
      <h2>Mode: {mode}</h2>
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
}

export default App;
