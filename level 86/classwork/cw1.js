function App() {
  const username = "Giorgi"; // შენი სახელი

  return (
    <div>
      {username ? (
        <p>Hello {username}</p>
      ) : (
        <p>Hello World</p>
      )}
    </div>
  );
}

export default App;
