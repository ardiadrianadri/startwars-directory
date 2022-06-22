import searchResultRepository from '../repositories/search-result-repository';

import {
  searchRequest,
  searchRequestSuccess,
  searchRequestError
} from './search-slice';

const genericError = {
  title: 'These are not the droids you are looking for',
  message: 'A disturbance in the force prevents us from communicating with the servers'
};

export function searchThunk(filters, search) {
  return (dispatch) => {
    dispatch(searchRequest({ favoritesFilter: filters.favorites }));
    searchResultRepository.doSearch(filters, search)
      .then(data => {
        dispatch(searchRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(searchRequestError(genericError));
      })
  }
}

export function paginationThunk(type, urlPage) {
  return (dispatch, getState) => {
    const favoritesFilter = getState().search.favoritesFilter;
    dispatch(searchRequest({ favoritesFilter }));
    searchResultRepository.goToPage(type, favoritesFilter, urlPage)
      .then(data => {
        dispatch(searchRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(searchRequestError(genericError));
      })
  }
}