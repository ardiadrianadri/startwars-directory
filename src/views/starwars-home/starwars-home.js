import './starwars-home.css';

import SearchContainer from '../../search-module/search-container/search-container';
import CharactersResultsContainer from '../../search-module/characters-result-container/characters-result-container';

function StarwarsHome() {
  return (
    <>
      <SearchContainer />
      <span className="result-container">
        <CharactersResultsContainer />
      </span>
    </>
  )
}

export default StarwarsHome;
