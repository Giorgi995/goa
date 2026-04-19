import React from "react";

/* =========================
   ErrorBoundary Component
========================= */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: ""
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error.message
    };
  }

  componentDidCatch(error, info) {
    console.log("Caught error:", error, info);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      message: ""
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: "2px solid red", padding: "20px", margin: "10px" }}>
          <h2> Error Caught!</h2>
          <p>{this.state.message}</p>
          <button onClick={this.resetError}>Reset</button>
        </div>
      );
    }

    return this.props.children;
  }
}

/* =========================
   Test Component
========================= */
function Test({ hasError }) {
  if (hasError) {
    throw new Error("Intentional Error from Test Component!");
  }

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      <h3> Test Component Works Fine</h3>
    </div>
  );
}

/* =========================
   Component Without ErrorBoundary
========================= */
function NoBoundaryComponent({ hasError }) {
  if (hasError) {
    throw new Error("This will crash the whole app!");
  }

  return (
    <div style={{ border: "1px solid green", padding: "20px", margin: "10px" }}>
      <h3> Component Without ErrorBoundary</h3>
    </div>
  );
}

/* =========================
   App Component
========================= */
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>ErrorBoundary Full Test</h1>

      {/* 1️ Two components inside ONE ErrorBoundary */}
      <ErrorBoundary>
        <Test hasError={false} />
        <Test hasError={true} />
      </ErrorBoundary>

      {/* 2️ One component inside separate ErrorBoundary */}
      <ErrorBoundary>
        <Test hasError={true} />
      </ErrorBoundary>

      {/* 3️ Component WITHOUT ErrorBoundary */}
      <NoBoundaryComponent hasError={false} />
    </div>
  );
}

export default App;