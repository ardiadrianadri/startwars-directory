import _ from 'lodash';
import './starwars-filters-control.css';

import StarwarsFilterButton from'../starwars-filter-button/starwars-filter-button';

function StarwarsFiltersControl ({filters, filtersChange}) {
  const onFiltersClick = (filter) => (event) => {
    const copyFilters = _.cloneDeep(filters);
    copyFilters[filter].active = event;
    filtersChange(copyFilters);
  }

  const filtersButtons = Object.keys(filters).map((filterKey, index) => (
    <StarwarsFilterButton
      key={index}
      title={filters[filterKey].title}
      image={filters[filterKey].image}
      active={filters[filterKey].active}
      changeState={onFiltersClick(filterKey)}
    ></StarwarsFilterButton>
  ))

  return (
    <div className="filters-control_container">
      <h3 className="filters-control_title">
        Filter your results by:
      </h3>
      <div className="filters-control_buttons">
        {filtersButtons}
      </div>
    </div>
  );
}

export default StarwarsFiltersControl;