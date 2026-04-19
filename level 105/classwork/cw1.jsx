import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom/client";

// 1. Context-ის შექმნა
const MyContext = createContext(null);

// 2. Wrapper კომპონენტი
const MyProviderWrapper = ({ children }) => {
  const [value, setValue] = useState("გამარჯობა, Context!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// 3. შვილის კომპონენტი, რომელიც Context-ს იყენებს
const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Context Value: {value}</p>
      <button onClick={() => setValue("Context განახლდა!")}>
        განახლება
      </button>
    </div>
  );
};

// 4. მთავარი App კომპონენტი
const App = () => {
  return (
    <MyProviderWrapper>
      <ChildComponent />
    </MyProviderWrapper>
  );
};

// 5. App-ის გამოძახება DOM-ში
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);