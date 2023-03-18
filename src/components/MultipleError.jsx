import React from "react";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class MyErrorBoundary extends React.Component {
    state = { error: null, errorInfo: null };
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  
    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
  
      return this.props.children;
    }
}

class ErrComp1 extends React.Component {
    state = { greeting: "Welcome to err 1" };
    componentDidMount() {
      throw new Error("An error has occured in ErrComp1 component!");
    }
    render() {
      return <h2>{this.state.greeting}</h2>;
    }
}
  
class Comp2 extends React.Component {
    state = { greeting: "Welcome to comp 2" };
    componentDidMount() {}
    render() {
        return <h2>{this.state.greeting}</h2>;
    }
}

class ErrComp3 extends React.Component {
    state = { greeting: "Welcome to err 3" };
    componentDidMount() {
      throw new Error("An error has occured in ErrComp3 component!");
    }
    render() {
      return <h2>{this.state.greeting}</h2>;
    }
}

const MultipleError = () => (
    <div style={styles}>
  
      <h2>Error Boundaries Assignment</h2>
      <MyErrorBoundary>
          <ErrComp1 />
      </MyErrorBoundary>
  
      <MyErrorBoundary>
          <Comp2 />
      </MyErrorBoundary>

      <MyErrorBoundary>
          <ErrComp3 />
      </MyErrorBoundary>
    </div>
);

export default MultipleError