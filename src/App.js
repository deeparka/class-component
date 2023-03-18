import './App.css';
import LogInForm from './components/LogInForm';
import MultipleError from './components/MultipleError';
import SingleErrorBoundary from './components/SingleErrorBoundary';
import TestError from './components/TestError';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      {/* <TestError /> */}
      <MultipleError />
    </div>
  );
}

export default App;
