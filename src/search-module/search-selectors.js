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