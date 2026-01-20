import { useState } from "react";
import "h8k-components";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput(""); // clear input after adding
    }
  };

  return (
    <>
      <h8k-navbar header="Item List Manager"></h8k-navbar>

      <div className="App">
        <h3>Item List</h3>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"
          data-testid="input-field"
        />

        <button onClick={handleAddItem} data-testid="add-button">
          Add Item
        </button>

        <ul>
          {items.map((item, idx) => (
            <li key={idx} data-testid="list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;