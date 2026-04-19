function add(a, b) {
    return a + b;
  }

  useEffect(() => {
    console.log("Start");

    // ფუნქცია
    console.log("Sum:", add(2, 3));

    // table
    console.table([
      { name: "Gio", age: 16 },
      { name: "Ana", age: 15 }
    ]);

    // process იმიტაცია
    console.log("Memory:", {
      heapUsed: "10MB",
      heapTotal: "20MB"
    });

  }, []);

  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}