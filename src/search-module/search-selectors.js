export function searchLoadingSelector(state) {
  return state.search.loading;
}

export function searchErrorSelector(state) {
  return state.search.error;
}

export function charactersResultsSelector(state) {
  return {
    results: state.search.charactersResults,
    pagination: state.search.charactersPagination
  };
}

export function planetsResultsSelector(state) {
  return {
    results: state.search.planetsResults,
    pagination: state.search.planetsPagination
  };
}

export function starshipsResultsSelector(state) {
  return {
    results: state.search.starshipsResults,
    pagination: state.search.starshipsPagination
  }
}

export function filtersSelector(state) {
  return state.search.filters;
}

export function lastSearchSelector(state) {
  return state.search.lastSearch;
}