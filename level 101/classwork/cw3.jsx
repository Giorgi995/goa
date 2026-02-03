import { useEffect, useState } from "react";

function App() {
  // AUTH
  const [accounts, setAccounts] = useState([]);
  const [user, setUser] = useState(null);

  // STUDENTS
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", surname: "", age: "" });

  // Load students
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students"));
    if (data) setStudents(data);
  }, []);

  // Save students
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // REGISTER
  const handleRegister = (e) => {
    e.preventDefault();

    const newAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const exists = accounts.some(acc => acc.email === newAccount.email);

    if (exists) {
      alert("Account already exists");
    } else {
      setAccounts([...accounts, newAccount]);
      alert("Account created!");
      e.target.reset();
    }
  };

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;

    const found = accounts.find(
      acc => acc.email === email && acc.pass === pass
    );

    if (found) {
      setUser(found);
    } else {
      alert("Invalid credentials");
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
  };

  // STUDENT FORM
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.surname || !form.age) return;

    if (form.id === null) {
      setStudents([...students, { ...form, id: Date.now() }]);
    } else {
      setStudents(students.map(s => (s.id === form.id ? form : s)));
    }

    setForm({ id: null, name: "", surname: "", age: "" });
  };

  const handleEdit = (student) => {
    setForm(student);
  };

  const handleDelete = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  // UI
  return (
    <div style={{ padding: 20 }}>
      {!user ? (
        <>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input name="email" type="email" placeholder="Email" required />
            <input name="pass" type="password" placeholder="Password" required />
            <button>Register</button>
          </form>

          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input name="email" type="email" placeholder="Email" required />
            <input name="pass" type="password" placeholder="Password" required />
            <button>Login</button>
          </form>
        </>
      ) : (
        <>
          <h2>სტუდენტების მართვის სისტემა</h2>
          <p>Logged in as: <b>{user.email}</b></p>
          <button onClick={logout}>Logout</button>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="სახელი"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="surname"
              placeholder="გვარი"
              value={form.surname}
              onChange={handleChange}
            />
            <input
              name="age"
              placeholder="ასაკი"
              value={form.age}
              onChange={handleChange}
            />
            <button>{form.id ? "რედაქტირება" : "დამატება"}</button>
          </form>

          <ul>
            {students.map(s => (
              <li key={s.id}>
                {s.name} {s.surname} - {s.age}
                <button onClick={() => handleEdit(s)}>✏️</button>
                <button onClick={() => handleDelete(s.id)}>🗑️</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
