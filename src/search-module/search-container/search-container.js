import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";

import StarwarsSearchForm from '../../components/starwars-search-form/starwars-search-form';
import { FILTER_BUTTON_STATES } from '../../components/starwars-filter-button/starwars-filter-button-states';
import searchThunk from '../search-thunks';

function SearchContainer() {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const dispatch = useDispatch();

  const queryParams = new URLSearchParams(search);
  const formFilters = {
    characters: queryParams.has('characters'),
    startships: queryParams.has('startships'),
    planets: queryParams.has('planets'),
    favorites: queryParams.has('favorites')
  };

  if (queryParams.has('search')) {
    dispatch(searchThunk(formFilters, queryParams.get('search')));
  }

  const onSubmitEvent = (event) => {
    if (event.stringFilter) {
      let path = `${pathname}?search=${event.stringFilter}`;

      path = Object.entries(event.typeFilters)
        .reduce((acc, value) => {
          if (value[1].active === FILTER_BUTTON_STATES.ACTIVATE) {
            acc +=`&${value[0]}=true`
          }

          return acc;
        }, path);

      navigate(path);
    }
  };

  return (
    <StarwarsSearchForm
      searchValue={(queryParams.has('search') ? queryParams.get('search') : '')}
      submitEvent={onSubmitEvent}
      filters={formFilters}
    />
  );
}

export default SearchContainer;