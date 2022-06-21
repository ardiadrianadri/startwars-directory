import './starwars-results-grid.css';

import { useState } from 'react';

import { ACCORDION_STATES } from './startwars-results-grid-states';
import StarwarsSmallCard from '../starwars-small-card/starwars-small-card';
import StarwarsPaginationBar from '../starwars-pagination-bar/starwars-pagination-bar';
import emptyGif from '../../resources/gifs/no_results.gif';
import triangleAccordion from '../../resources/icons/triangle.png';

function StarwarsResultsGrid({dataList, elementSelected, elementFavorite, accordionTitle, initialAccordionState}) {

  const [accordionState, updateAccordionState] = useState(initialAccordionState ||'');

  const grid = dataList.map(element => (
    <StarwarsSmallCard
      {...element}
      selected={elementSelected}
      changeFavorite={elementFavorite}
    />
  ));

  const onExpandAccordion = () => {
    if (accordionState === ACCORDION_STATES.OPEN) {
      updateAccordionState(ACCORDION_STATES.CLOSE);
    } else {
      updateAccordionState(ACCORDION_STATES.OPEN);
    }
  }

  return (
    <div className="results-grid_container">
      <div className="results-grid_acordion-header">
        <button type='button' className='result-grid_acordion-header_button' onClick={onExpandAccordion}>
          <img
            src={triangleAccordion}
            alt="open close accordion"
            className={`result-grid_accordion-header_button_img ${accordionState}`}
          />
        </button>
        <div className="result-grid_acordion-header_title">{accordionTitle}</div>
      </div>
      <div className={`results-grid_acordion_body ${accordionState}`}>
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
    </div>
  );
}

export default StarwarsResultsGrid;


