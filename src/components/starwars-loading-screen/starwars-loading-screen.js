import './starwars-loading-screen.css';

import StarwarsModalScreen from '../starwars-modal-screen/starwars-modal-screen';
import searchinGif from '../../resources/gifs/searching.gif';

function StarwarsLoadingScreen({showLoading}) {
  return (
    <StarwarsModalScreen show={showLoading}>
      <div className="loading-screen_container">
        <img src={searchinGif} alt="Loading..." className="loading-screen_gif"/>
        <div className="loading-screen_message">
          Searching the data...
        </div>
      </div>
    </StarwarsModalScreen>
  );
}

export default StarwarsLoadingScreen;