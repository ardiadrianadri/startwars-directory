import './App.css';
import { Outlet } from 'react-router-dom';
import StarwarsNavbar from './components/starwars-navbar/starwars-navbar'
import LoadingContainer from './loading-module/loading-container/loading-container';
import ErrorContainer from './error-module/error-container/error-container';

function App() {
  return (
    <>
      <LoadingContainer />
      <ErrorContainer />
      <div className="container">
        <StarwarsNavbar title="Starwars"/>
        <Outlet />
      </div>
    </>
  );
}

export default App;
