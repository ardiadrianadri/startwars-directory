/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StarwarsSearchForm from '../../components/starwars-search-form/starwars-search-form';
import { FILTER_BUTTON_STATES } from '../../components/starwars-filter-button/starwars-filter-button-states';
import { searchThunk, runLastSearch } from '../search-thunks';
import { cleanSearch } from '../search-slice';
import {
  charactersResultsSelector,
  planetsResultsSelector,
  starshipsResultsSelector,
  filtersSelector,
  lastSearchSelector
} from '../search-selectors';

function SearchContainer() {
  const dispatch = useDispatch();
  const charactersResultData = useSelector(charactersResultsSelector);
  const planetsResultData = useSelector(planetsResultsSelector);
  const starshipsResultData = useSelector(starshipsResultsSelector);
  const filters = useSelector(filtersSelector);
  const lastSearch = useSelector(lastSearchSelector);

  const onSubmitEvent = (event) => {
    if (event.stringFilter) {
      const filters = Object.entries(event.typeFilters)
        .reduce((acc, filter) => {
          return {
            ...acc,
            [filter[0]]: FILTER_BUTTON_STATES.ACTIVATE === filter[1].active
          }
        }, {});
      dispatch(searchThunk(filters, event.stringFilter));
    }
  };

  useEffect(() => {
    if (charactersResultData.results.length === 0 && planetsResultData.results.length === 0 && starshipsResultData.results.length === 0) {
      dispatch(runLastSearch());
    }

    return () => {
      dispatch(cleanSearch());
    };
  }, []);

  return (
    <StarwarsSearchForm
      submitEvent={onSubmitEvent}
      filters={filters || {}}
      searchValue={lastSearch}
    />
  );
}

export default SearchContainer;