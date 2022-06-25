import searchResultRepository from '../repositories/search-result-repository';

import {
  searchRequest,
  searchRequestSuccess,
  searchRequestError
} from './search-slice';

import { genericError } from '../helpers/errors-code';

function runTheSearch(filters, lastSearch, updateFavorites, dispatch) {
  dispatch(searchRequest({ filters, lastSearch, updateFavorites }));
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
    runTheSearch(filters, search, false, dispatch);
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
    runTheSearch(filters, lastSearch, true, dispatch);
  }
}

export function runLastSearch() {
  return (dispatch, getState) => {
  const { filters, lastSearch } = getState().search;

  if (filters && lastSearch) {
    runTheSearch(filters, lastSearch, false, dispatch);
  }
  }
}