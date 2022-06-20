import { useDispatch } from 'react-redux';

import StarwarsSearchForm from '../../components/starwars-search-form/starwars-search-form';
import { FILTER_BUTTON_STATES } from '../../components/starwars-filter-button/starwars-filter-button-states';
import searchThunk from '../search-thunks';

function SearchContainer() {
  const dispatch = useDispatch();

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

  return (
    <StarwarsSearchForm
      submitEvent={onSubmitEvent}
    />
  );
}

export default SearchContainer;