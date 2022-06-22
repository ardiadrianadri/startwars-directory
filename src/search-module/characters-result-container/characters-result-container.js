/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';

import StarwarsAccordion from '../../components/starwars-accordion/starwars-accodion';
import { ACCORDION_STATES} from '../../components/starwars-accordion/starwars-accordion-states';
import StarwarsResultsGrid from '../../components/starwars-results-grid/starwars-results-grid';

import { charactersResultsSelector } from '../search-selectors';

function CharactersResultsContainer() {
  const { results, pagination } = useSelector(charactersResultsSelector);
  const title = 'Characters';
  const [accordionState, updateAccordionState] = useState(ACCORDION_STATES.CLOSE);

  const onAccordionChange = () => {
    if (accordionState === ACCORDION_STATES.OPEN) {
      updateAccordionState(ACCORDION_STATES.CLOSE);
    } else {
      updateAccordionState(ACCORDION_STATES.OPEN);
    }
  };

  const onElementSelected = (event) => {
    console.log('NNN element selected: ', event);
  };

  const onElementFavorite = (event) => {
    console.log('NNN element favorite: ', event);
  };


  useEffect(() => {
    if (results.length) {
      updateAccordionState(ACCORDION_STATES.OPEN);
    } else if (accordionState === ACCORDION_STATES.OPEN) {
      updateAccordionState(ACCORDION_STATES.CLOSE);
    }

  }, [results]);

  return (
    <StarwarsAccordion title={title} state={accordionState} changeState={onAccordionChange}>
      <StarwarsResultsGrid
        dataList={results}
        elementFavorite={onElementFavorite}
        elementSelected={onElementSelected}
      />
    </StarwarsAccordion>
  );
}

export default CharactersResultsContainer;
