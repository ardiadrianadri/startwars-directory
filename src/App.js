import './App.css';
import { Link } from 'react-router-dom';
import TestComponents from './test-components/test-components';

function App() {
  return (
    <div className="container">
       <h1>This is the home app</h1>
       <Link to="/test">To test</Link>
       <TestComponents />
    </div>
  );
}

export default App;
