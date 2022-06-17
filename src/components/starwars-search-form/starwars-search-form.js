import { useState } from 'react';
import './starwars-search-form.css';

import StarwarsInput from '../starwars-input/starwars-input';
import StartwarsButton from '../starwars-button/starwars-button';
import { BUTTON_COLORS, BUTTON_SIZES} from '../starwars-button/button-constants';

function StarwarsSearchForm({searchValue, submitEvent}) {
  const [searchInput, setSearchValue] = useState(searchValue || '');

  const updateValue = (event) => {
    setSearchValue(event.target.value);
  }

  const fireSubmitEvent = (event) => {
    event.preventDefault();
    submitEvent({ searchFilter: searchInput});
  };

  return (
    <form className="search-from_container" onSubmit={fireSubmitEvent}>
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
    </form>
  );
}

export default StarwarsSearchForm;