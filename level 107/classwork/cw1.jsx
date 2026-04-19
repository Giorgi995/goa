import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [double, setDouble] = useState(0);

  // ნელი ფუნქცია 10 მილიონიანი ციკლით
  const slowFunction = (num) => {
    console.log("Slow function running...");
    for (let i = 0; i < 10000000; i++) {
      // ტყვილი ციკლი
    }
    return num * 2;
  };

  // getDouble arrow ფუნქცია
  const getDouble = useCallback(() => {
    const result = slowFunction(number);
    setDouble(result);
  }, [number]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>States Example</h2>

      <p>Count: {count}</p>
      <p>Number: {number}</p>
      <p>Double: {double}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <button onClick={getDouble}>
        Get Double (Slow)
      </button>
    </div>
  );
}

export default App;