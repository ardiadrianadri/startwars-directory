import './App.css';
import { Outlet } from 'react-router-dom';
import StarwarsNavbar from './components/starwars-navbar/starwars-navbar'
import LoadingContainer from './loading-module/loading-container/loading-container';

function App() {
  return (
    <>
      <LoadingContainer />
      <div className="container">
        <StarwarsNavbar title="Startwars"/>
        <Outlet />
      </div>
    </>
  );
}

export default App;
