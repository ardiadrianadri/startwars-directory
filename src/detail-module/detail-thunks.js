import detailRepository from '../repositories/detail-repository';

import {
  detailRequest,
  detailRequestError,
  detailRequestSuccess
} from './detail-slice';

import { genericError } from '../helpers/errors-code';

export function requestDetail(id, type) {
  return (dispatch, getState) => {
    const { id: prevId, type: prevType } = getState().detail;
    
    if (id !== prevId || type !== prevType) {
      dispatch(detailRequest({id, type}));
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
}