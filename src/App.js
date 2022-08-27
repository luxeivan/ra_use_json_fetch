import './App.css';
import TestData from './components/TestData';
import TestError from './components/TestError';
import TestLoading from './components/TestLoading';

function App() {
  return (
    <div className="App">
      <TestError />
      <TestData />
      <TestLoading />
    </div>
  );
}

export default App;
