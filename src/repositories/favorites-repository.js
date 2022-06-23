import {
  CHARACTERS,
  PLANETS,
  STARSHIPS
} from '../helpers/starwars-types';
import { ERRORS_CODES } from '../helpers/errors-code';
import StarwarsError from '../helpers/starwars-error';

class FavoritesRepository {
  constructor() {
    this.favorites = {
      [CHARACTERS]: [],
      [PLANETS]: [],
      [STARSHIPS]: [],
    }
  };

  _checkType(type) {
    const allTypes = [CHARACTERS, PLANETS, STARSHIPS];
      
      if (allTypes.indexOf(type) < 0) {
        return false;
      }

      return true;
  }

  addFavorite(id, type) {

    if (!this._checkType(type)) {
      throw new StarwarsError(ERRORS_CODES.NOT_VALID_TYPE, type, 'Invalid type of data');
    }

    if (this.favorites[type].indexOf(id) < 0) {
      this.favorites[type].push(id);
    }
  }

  removeFavorite(id, type) {
    if (!this._checkType(type)) {
      throw new StarwarsError(ERRORS_CODES.NOT_VALID_TYPE, type, 'Invalid type of data');
    }

    const index = this.favorites[type].indexOf(id);
    if (index > -1) {
      const headList = this.favorites[type].slice(0, index);
      const tailList = this.favorites[type].slice(index + 1, this.favorites.length);
      this.favorites[type] = [...headList, ...tailList];
    }
  }

  existInFavorites(id, type) {
    return this.favorites[type].indexOf(id) > -1;
  }
}

const favoritesRepository = new FavoritesRepository();

export default favoritesRepository;