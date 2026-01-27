import { useState } from "react";

function Form() {
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const password = form.elements.password.value;

    if (password.length < 8) {
      setError(true);
    } else  {
      setError(false);
      console.log("Name", name);
      console.log("Password", password);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
        />
        <br /><br />

        <input type="commit" value="commit" />
      </form>

      {error && (
        <p style={{ color: "black" }}>
          პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს
        </p>
      )}
    </div>
  );
}

export default Form;