import detailRepository from '../repositories/detail-repository';

import {
  detailRequest,
  detailRequestError,
  detailRequestSuccess
} from './detail-slice';

import { genericError } from '../helpers/errors-code';

export function requestDetail(id, type) {
  return (dispatch) => {
    dispatch(detailRequest());
    detailRepository.getDetailInfo(id, type)
      .then((data) => {
        dispatch(detailRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(detailRequestError(genericError));
      })
  }
}