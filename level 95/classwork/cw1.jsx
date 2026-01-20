import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // ვქმნით async ფუნქციას
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("შეცდომა:", error);
      }
    };

    // ვიძახებთ async ფუნქციას
    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
Collapse
Collapse (32 lines)
View whole file
cw.jsx
cw.jsx (1 KB)
1 KB
cw.jsx (1 KB)
Download cw.jsx (1 KB)Change language
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => }