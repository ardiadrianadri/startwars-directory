import {
  getCharactesPicture,
  getStarshipsPicture,
  getPlanetsPicture
} from '../helpers/get-pictures';
import { ERRORS_CODES } from '../helpers/errors-code';
import StarwarsError from '../helpers/starwars-error';
import {
  CHARACTERS,
  PLANETS,
  STARSHIPS
} from '../helpers/starwars-types';

import swapiDataSource from '../datasource/swapi-datasource';
import favoritesRepository from './favorites-repository';

const getPictures = {
  [CHARACTERS]: getCharactesPicture,
  [PLANETS]: getPlanetsPicture,
  [STARSHIPS]: getStarshipsPicture
}

class DetailRepository {

  _successManager(data) {
    return data;
  }

  _errorManager(type) {
    return (error) => {
      throw new StarwarsError(ERRORS_CODES.GENERIC_ERROR, type, error.message);
    }
  }

  addfavorite(id, type) {
    favoritesRepository.addFavorite(id, type);
  }

  removefavorite(id, type) {
    favoritesRepository.removeFavorite(id, type);
  }

  getDetailInfo(id, type) {
    const types = [CHARACTERS, PLANETS, STARSHIPS];

    let request;

    if (!types.includes(type)) {
      throw new StarwarsError(ERRORS_CODES.NOT_VALID_TYPE, type, 'Invalid type');
    }

    switch(type) {
      case CHARACTERS:
        request = swapiDataSource.getCharacerInfo(id);
      break;
      case PLANETS:
        request = swapiDataSource.getPlanetInfo(id);
      break;
      default:
        request = swapiDataSource.getStarshipInfo(id);
    }

    return request
      .then(this._successManager)
      .catch(this._errorManager(type));
  }
}

const detailRepository = new DetailRepository();

export default detailRepository;
