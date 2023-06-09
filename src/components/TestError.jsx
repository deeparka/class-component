import React from "react";

class MyErrorBoundary extends React.Component {
  state = {
    errorMessage: ""
  };
  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }
  logErrorToServices = console.log;
  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

class BuggyCounter extends React.Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    if (this.state.counter === 5) {
      // Simulate an error!
      throw new Error("I crashed!");
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

function TestError() {
  //const history = useHistory();
  const refreshPage = () => window.location.reload();
  return (
    <div>
      <MyErrorBoundary>
        <BuggyCounter />
      </MyErrorBoundary>
      <hr />
      <button onClick={refreshPage}>Refresh Page</button>
    </div>
  );
}

export default TestError