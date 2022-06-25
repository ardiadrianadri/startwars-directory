import {
  CHARACTERS,
  PLANETS,
  STARSHIPS
} from '../helpers/starwars-types';

export function detailLoadingSelector(state) {
  return state.detail.loading;
}

export function detailErrorSelector(state) {
  return state.detail.error;
}

export function detailDataSelector(state) {
  return {
    name: state.detail.name,
    picture: state.detail.picture,
    favorite: state.detail.favorite,
    detailData: state.detail.detailData
  };
}

export function detailGridDataSelector(type) {
  return (state) => {
    switch (type) {
      case 'characters':
        return state.detail.charactersList;
      case 'planets':
        return state.detail.planetsList;
      case 'starships':
        return state.detail.starshipsList;
      default:
        return [];
    }
  }
}

export function detailSizeGridFooters(state) {
  let numberFooters = state.detail.charactersList ? 1 : 0;

  numberFooters = state.detail.planetsList ? numberFooters + 1 : numberFooters;
  numberFooters = state.detail.starshipsList ? numberFooters + 1 : numberFooters;

  return 3 - numberFooters;
}

export function detailGetListFooters (state) {
  let listFooters = [];

  if (state.detail.charactersList.length) {
    listFooters.push(CHARACTERS);
  }

  if (state.detail.planetsList.length) {
    listFooters.push(PLANETS);
  }

  if (state.detail.starshipsList.length) {
    listFooters.push(STARSHIPS);
  }

  return listFooters;
}