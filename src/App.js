import './App.css';
import { Outlet } from 'react-router-dom';
import StarwarsNavbar from './components/starwars-navbar/starwars-navbar'

function App() {
  return (
    <div className="container">
        <StarwarsNavbar title="Startwars"/>
        <Outlet />
    </div>
  );
}

export default App;
