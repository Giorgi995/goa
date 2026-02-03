import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", surname: "", age: "" });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students"));
    if (data) setStudents(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

if (!form.name || !form.surname || !form.age) return;

if (form.id === null) {
      setStudents([...students, { ...form, id: Date.now() }]);
    } else {
      setStudents(
        students.map((s) => (s.id === form.id ? form : s))
      );
    }

    setForm({ id: null, name: "", surname: "", age: "" });
  };

  const handleEdit = (student) => {
    setForm(student);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>სტუდენტების მართვის სისტემა</h2>

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
        <button type="submit">
          {form.id ? "რედაქტირება" : "დამატება"}
        </button>
      </form>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} {s.surname} - {s.age}
            <button onClick={() => handleEdit(s)}>✏️</button>
            <button onClick={() => handleDelete(s.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
