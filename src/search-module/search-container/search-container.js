import './search-container.css';

import { useNavigate, useLocation } from "react-router-dom";

import StarwarsSearchForm from '../../components/starwars-search-form/starwars-search-form';
import { FILTER_BUTTON_STATES } from '../../components/starwars-filter-button/starwars-filter-button-states';

function SearchContainer() {
  const navigate = useNavigate();

  const { search, pathname } = useLocation();
  const queryParams = new URLSearchParams(search);

  const onSubmitEvent = (event) => {
    let path = `${pathname}?search=${event.stringFilter}`;

    path = Object.entries(event.typeFilters)
      .reduce((acc, value) => {
        if (value[1].active === FILTER_BUTTON_STATES.ACTIVATE) {
          acc +=`&${value[0]}=true`
        }

        return acc;
      }, path);

    navigate(path);
  };

  return (
    <StarwarsSearchForm
      searchValue={(queryParams.has('search') ? queryParams.get('search') : '')}
      submitEvent={onSubmitEvent}
    />
  );
}

export default SearchContainer;