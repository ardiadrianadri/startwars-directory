import { useState } from 'react';
import './starwars-search-form.css';

import StarwarsInput from '../starwars-input/starwars-input';
import StartwarsButton from '../starwars-button/starwars-button';
import { BUTTON_COLORS, BUTTON_SIZES} from '../starwars-button/button-constants';
import StarwarsFiltersControl from '../starwars-filters-control/starwars-filters-control';
import starActiveIcon from '../../resources/icons/Star-active.svg';
import { FILTER_BUTTON_STATES } from '../starwars-filter-button/starwars-filter-button-states';

function StarwarsSearchForm({searchValue, filters, submitEvent}) {
  const [searchInput, setSearchValue] = useState(searchValue || '');
  const [filtersState, setFiltersValue] = useState({
    characters: {
      title: 'Characters',
      active: filters?.characters ? FILTER_BUTTON_STATES.ACTIVATE : null,
    },
    startships: {
      title: 'Startships',
      active: filters?.startships ? FILTER_BUTTON_STATES.ACTIVATE : null,
    },
    planets: {
      title: 'Planets',
      active: filters?.planets ? FILTER_BUTTON_STATES.ACTIVATE : null,
    },
    favorites: {
      title: 'Favorites',
      active: filters?.favorites ? FILTER_BUTTON_STATES.ACTIVATE : null,
      image: starActiveIcon
    }
  })

  const onFiltersChanges = (event) => {
    setFiltersValue(event);
    submitEvent({
      stringFilter: searchInput,
      typeFilters: event 
    })
  }

  const updateValue = (event) => {
    setSearchValue(event.target.value);
  }

  const fireSubmitEvent = (event) => {
    event.preventDefault();
    submitEvent({
      stringFilter: searchInput,
      typeFilters: filtersState
    });
  };

  return (
    <form className="search-from_container" onSubmit={fireSubmitEvent}>
      <div className="search-form_field-container">
        <div className="search-from_field">
          <StarwarsInput label="Write what ever you are looking for">
            <input type="text" value={searchInput} onInput={updateValue}/>
          </StarwarsInput>
        </div>
        <div className="search-form_button">
          <StartwarsButton size={BUTTON_SIZES.MEDIUM} color={BUTTON_COLORS.PRIMARY}>
            <button type="submit">Search</button>
          </StartwarsButton>
        </div>
      </div>
      <StarwarsFiltersControl
        filters={filtersState}
        filtersChange={onFiltersChanges}
      />
    </form>
  );
}

export default StarwarsSearchForm;