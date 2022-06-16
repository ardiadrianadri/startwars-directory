import homeIcon from '../../resources/icons/home-icon.svg'
import { Link } from 'react-router-dom';
import './starwars-navbar.css';

function StarwarsNavbar ({title}) {
  return (
    <nav className="nav-bar_container">
      <div className="nav-bar_title">{title}</div>
      <div className="nav-bar_home-icon">
        <Link to="/">
          <img src={homeIcon} alt="go home" className='nav-bar_home-icon-img'/>
        </Link>
      </div>
    </nav>
  );
}

export default StarwarsNavbar;