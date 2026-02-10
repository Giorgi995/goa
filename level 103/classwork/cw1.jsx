// hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const register = (email, password) => {
    const newUser = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
  };

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem("user", JSON.stringify(savedUser));
      setUser(savedUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, register, login, logout };
}

// useProducts custom hook
// hooks/useProducts.js
import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (name) => {
    setProducts([...products, { id: Date.now(), name }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return { products, addProduct, deleteProduct };
}
✔️ state და localStorage ყოველთვის სინქრონშია

//Register კომპონენტი

// components/Register.jsx
import { useState } from "react";

export default function Register({ register }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    register(email, password);
    alert("რეგისტრაცია დასრულდა");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>რეგისტრაცია</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
}
🔑 Login კომპონენტი
// components/Login.jsx
import { useState } from "react";

export default function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) alert("არასწორი მონაცემები");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button>Login</button>
    </form>
  );
}
 Dashboard (პროდუქტები)
// components/Dashboard.jsx
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";

export default function Dashboard({ logout }) {
  const { products, addProduct, deleteProduct } = useProducts();
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addProduct(name);
    setName("");
  };

  return (
    <>
      <button onClick={logout}>Logout</button>

      <form onSubmit={submitHandler}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name"
        />
        <button>Add</button>
      </form>

      {products.length === 0 ? (
        <p>პროდუქტები არ არის</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>
                  <button onClick={() => deleteProduct(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
App.jsx – ყველაფრის შეკრება
import { useAuth } from "./hooks/useAuth";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const { user, register, login, logout } = useAuth();

  if (!user) {
    return (
      <>
        <Register register={register} />
        <Login login={login} />
      </>
    );
  }

  return <Dashboard logout={logout} />;
}

export default App;