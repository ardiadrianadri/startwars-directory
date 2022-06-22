import './starwars-home.css';

import SearchContainer from '../../search-module/search-container/search-container';
import CharactersResultsContainer from '../../search-module/characters-result-container/characters-result-container';
import PlanetsResultsContainer from '../../search-module/planets-result-container/planets-result-container';

function StarwarsHome() {
  return (
    <>
      <SearchContainer />
      <span className="result-container">
        <CharactersResultsContainer />
      </span>
      <span className="result-container">
        <PlanetsResultsContainer />
      </span>
    </>
  )
}

export default StarwarsHome;
