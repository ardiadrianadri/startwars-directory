import detailRepository from '../repositories/detail-repository';
import searchResultRepository from '../repositories/search-result-repository';
import {
  CHARACTERS,
  PLANETS,
  STARSHIPS
} from '../helpers/starwars-types';

import {
  detailRequest,
  detailRequestError,
  detailRequestSuccess
} from './detail-slice';

import { genericError } from '../helpers/errors-code';

export async function getDetailInfo(dispatch, id, type) {
  try {
    dispatch(detailRequest());
    const data = await detailRepository.getDetailInfo(id, type);
    if (data.related.characters) {
      data.related.characters = await searchResultRepository.getResultByUrlList(data.related.characters, CHARACTERS);
    }
    if (data.related.planets) {
      data.related.planets = await searchResultRepository.getResultByUrlList(data.related.planets, PLANETS);
    }
    if (data.related.starships) {
      data.related.starships = await searchResultRepository.getResultByUrlList(data.related.starships, STARSHIPS);
    }
    
    dispatch(detailRequestSuccess(data));
  } catch(err) {
    console.error(err);
    dispatch(detailRequestError(genericError));
  }
}

export function requestDetail(id, type) {
  return (dispatch) => getDetailInfo(dispatch, id, type);
}

export function updateFavorite(id, type, favorite) {
  return (dispatch) => {
    if (favorite) {
      detailRepository.addfavorite(id, type);
    } else {
      detailRepository.removefavorite(id, type);
    }

    return getDetailInfo(dispatch, id, type);
  }
}

export function updateFavoriteFromFooter(id, type, favoriteData) {
  return (dispatch) => {
    if (favoriteData.favorite) {
      detailRepository.addfavorite(favoriteData.id, favoriteData.type);
    } else {
      detailRepository.removefavorite(favoriteData.id, favoriteData.type);
    }

    return getDetailInfo(dispatch, id, type);
  }
}