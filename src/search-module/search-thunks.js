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

function runTheSearch(filters, lastSearch, dispatch) {
  dispatch(searchRequest({ filters, lastSearch }));
  return searchResultRepository.doSearch(filters, lastSearch)
    .then(data => {
      dispatch(searchRequestSuccess(data));
    })
    .catch(err => {
      console.error(err);
      dispatch(searchRequestError(genericError));
    });
}

export function searchThunk(filters, search) {
  return (dispatch) => {
    runTheSearch(filters, search, dispatch);
  }
}

export function paginationThunk(type, urlPage) {
  return (dispatch, getState) => {
    const { filters, lastSearch } = getState().search;
    dispatch(searchRequest({ filters, lastSearch }));
    searchResultRepository.goToPage(type, filters.favorites, urlPage)
      .then(data => {
        dispatch(searchRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(searchRequestError(genericError));
      })
  }
}

export function setFavorites(id, type, favorite) {
  return (dispatch, getState) => {
    if (favorite) {
      searchResultRepository.addFavorite(id, type);
    } else {
      searchResultRepository.removeFavorite(id, type);
    }

    const { filters, lastSearch } = getState().search;
    runTheSearch(filters, lastSearch, dispatch);
  }
}