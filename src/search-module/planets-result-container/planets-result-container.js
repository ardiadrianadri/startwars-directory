import StarwarsAccordion from "../../components/starwars-accordion/starwars-accodion";
import StarwarsResultsGrid from "../../components/starwars-results-grid/starwars-results-grid";
import StarwarsPaginationBar from "../../components/starwars-pagination-bar/starwars-pagination-bar";

import { planetsResultsSelector } from '../search-selectors';
import {
  useAccordionState,
  useElementFavorite,
  usePagination,
  useNavigateToDetail
} from '../../helpers/customHooks';

import { PLANETS } from '../../helpers/starwars-types';

function PlanetsResultsContainer() {
  const title = 'Planets';
  const [
    accordionState,
    results,
    pagination,
    onAccordionChange
  ] = useAccordionState(planetsResultsSelector);
  const onElementFavorite = useElementFavorite();
  const [
    onPrevPage,
    onNextPage
  ] = usePagination(planetsResultsSelector, PLANETS);

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

export default PlanetsResultsContainer;
