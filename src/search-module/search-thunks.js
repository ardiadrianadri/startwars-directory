import searchResultRepository from '../repositories/search-result-repository';

import {
  searchRequest,
  searchRequestSuccess,
  searchRequestError
} from './search-slice';

function searchThunk(filters, search) {
  return (dispatch) => {
    dispatch(searchRequest());
    searchResultRepository.doSearch(filters, search)
      .then(data => {
        dispatch(searchRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(searchRequestError({
          title: 'These are not the droids you are looking for',
          message: 'A disturbance in the force prevents us from communicating with the servers'
        }));
      })
  }
}

export default searchThunk;