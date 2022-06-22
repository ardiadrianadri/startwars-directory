import './starwars-results-grid.css';

import StarwarsSmallCard from '../starwars-small-card/starwars-small-card';
import emptyGif from '../../resources/gifs/no_results.gif';

function StarwarsResultsGrid({dataList, elementSelected, elementFavorite}) {

  const grid = dataList.map((element, index) => (
    <StarwarsSmallCard
      key={index}
      {...element}
      title={element.name}
      selected={elementSelected}
      changeFavorite={elementFavorite}
    />
  ));

  return (
    <div className="results-grid_container">
      {
        dataList.length
        ? (
          <>
            <div className="results-grid_grid">
              {grid}
            </div>
          </>
        )
        : (
          <>
            <h3 className="results-grid_title">Scanners have not found any results for parsecs around</h3>
            <div className="results-grid_no-results-found">
              <img src={emptyGif} alt="no results" className="results-grid_no-results_img"/>
            </div>
          </>
        )
      }
    </div>
  );
}

export default StarwarsResultsGrid;


