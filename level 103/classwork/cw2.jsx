gza 1:

import { useState } from "react";
import Component1 from "./Component1";

function App() {
  const [name, setName] = useState("Giorgi");

  return (
    <div>
      <h2>{name}</h2>
      <Component1 name={name} />
    </div>
  );
}

export default App;
Component1.jsx
import Component2 from "./Component2";

function Component1({ name }) {
  return <Component2 name={name} />;
}

export default Component1;
Component2.jsx
import Component3 from "./Component3";

function Component2({ name }) {
  return <Component3 name={name} />;
}

export default Component2;
Component3.jsx
function Component3({ name }) {
  return <h2>{name}</h2>;
}

export default Component3;

gza 2:

2️⃣ გზა — Context API (useContext)

აქ ვწყვეტთ props drilling-ს და state-ს ვაზიარებთ გლობალურად.

1. Context-ის შექმნა
NameContext.js
import { createContext } from "react";

export const NameContext = createContext();

2. App.jsx — Provider
import { useState } from "react";
import { NameContext } from "./NameContext";
import Component1 from "./Component1";

function App() {
  const [name, setName] = useState("Giorgi");

  return (
    <NameContext.Provider value={name}>
      <h2>{name}</h2>
      <Component1 />
    </NameContext.Provider>
  );
}

export default App;

3. Component1.jsx
import Component2 from "./Component2";

function Component1() {
  return <Component2 />;
}

export default Component1;

4. Component2.jsx
import Component3 from "./Component3";

function Component2() {
  return <Component3 />;
}

export default Component2;

5. Component3.jsx — useContext გამოყენება
import { useContext } from "react";
import { NameContext } from "./NameContext";

function Component3() {
  const name = useContext(NameContext);

  return <h2>{name}</h2>;
}

export default Component3;