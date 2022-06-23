import './starwars-home.css';

import SearchContainer from '../../search-module/search-container/search-container';
import CharactersResultsContainer from '../../search-module/characters-result-container/characters-result-container';
import PlanetsResultsContainer from '../../search-module/planets-result-container/planets-result-container';
import StarshipsResultsContainer from '../../search-module/starships-result-container/starships-result-container';

function StarwarsHome() {
  return (
    <>
      <SearchContainer />
      <div className='results_view'>
        <CharactersResultsContainer />
        <PlanetsResultsContainer />
        <StarshipsResultsContainer />
      </div>
    </>
  )
}

export default StarwarsHome;
