import './App.css';
import LogInForm from './components/LogInForm';
import SingleErrorBoundary from './components/SingleErrorBoundary';
import TestError from './components/TestError';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      {/* <TestError /> */}
      <SingleErrorBoundary />
    </div>
  );
}

export default App;
