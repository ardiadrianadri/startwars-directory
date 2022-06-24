import StarwarsAccordion from '../../components/starwars-accordion/starwars-accodion';
import StarwarsResultsGrid from '../../components/starwars-results-grid/starwars-results-grid';
import StarwarsPaginationBar from '../../components/starwars-pagination-bar/starwars-pagination-bar';

import { charactersResultsSelector } from '../search-selectors';
import {
  useAccordionState,
  useElementFavorite,
  usePagination,
  useNavigateToDetail
} from '../../helpers/customHooks';
import { CHARACTERS } from '../../helpers/starwars-types';

function CharactersResultsContainer() {
  const title = 'Characters';
  const [
    accordionState,
    results,
    pagination,
    onAccordionChange
  ] = useAccordionState(charactersResultsSelector);
  const onElementFavorite = useElementFavorite();
  const [
    onPrevPage,
    onNextPage
  ] = usePagination(charactersResultsSelector, CHARACTERS);

  const onElementSelected = useNavigateToDetail();


  return (
    <StarwarsAccordion title={title} state={accordionState} changeState={onAccordionChange}>
      <StarwarsResultsGrid
        dataList={results}
        elementFavorite={onElementFavorite}
        elementSelected={onElementSelected}
      />
      {
        (results.length)
          ? (
            <StarwarsPaginationBar
              isThereNextPage={!!pagination?.nextPage}
              isTherePrevPage={!!pagination?.prevPage}
              goNext={onNextPage}
              goPrev={onPrevPage}
            />
          )
        : null
      }
    </StarwarsAccordion>
  );
}

export default CharactersResultsContainer;
