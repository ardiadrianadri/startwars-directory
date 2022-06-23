import {
  getCharactesPicture,
  getStarshipsPicture,
  getPlanetsPicture
} from '../helpers/get-pictures';
import { ERRORS_CODES } from '../helpers/errors-code';
import StarwarsError from '../helpers/startwars-error';

import swapiDataSource from '../datasource/swapi-datasource';
import {
  CHARACTERS,
  PLANETS,
  STARSHIPS
} from '../helpers/starwars-types';

const getPictures = {
  [CHARACTERS]: getCharactesPicture,
  [PLANETS]: getPlanetsPicture,
  [STARSHIPS]: getStarshipsPicture
}

class SearchResultRepository {

  constructor() {
    this.favorites = {
      [CHARACTERS]: [],
      [PLANETS]: [],
      [STARSHIPS]: [],
    }
  }

  _searchCharacters(search) {
    return swapiDataSource.searchCharacters(search)
    .then(this._successManager(CHARACTERS))
    .catch(this._errorManager(CHARACTERS));
  }

  _searchPlanets(search) {
    return swapiDataSource.searchPlanets(search)
    .then(this._successManager(PLANETS))
    .catch(this._errorManager(PLANETS));
  }

  _searchStarships(search) {
    return swapiDataSource.searchStarships(search)
    .then(this._successManager(STARSHIPS))
    .catch(this._errorManager(STARSHIPS));
  }
  

  _errorManager(type) {
    return (error) => {
      if (error.request && error.request.status === 404) {
        return [];
      } else {
        throw new StarwarsError(ERRORS_CODES.GENERIC_ERROR, type, error.message);
      }
    }
  }

  _successManager(type) {
    return (data) => {
      const results = data.results.map(item => {
        const localType = type === CHARACTERS ? 'people' : type;
        const id = item.url.split(localType)[1]?.slice(1,-1);

        return {
          id,
          type: type,
          name: item.name,
          picture: getPictures[type](item.name),
          favorites: this.favorites[type].indexOf(id) > -1
        }
      });

      const pagination = {
        nextPage: data.next,
        prevPage: data.previous,
      }

      return {
        [type]: {
          pagination,
          results,
        }
      }
    }
  }

  _listSearchs(filters, search) {
    let result = [];

    if (filters.characters) {
      result.push(this._searchCharacters(search));
    }

    if (filters.planets) {
      result.push(this._searchPlanets(search));
    }

    if (filters.starships) {
      result.push(this._searchStarships(search));
    }

    if (!result.length) {
      result = [
        this._searchCharacters(search),
        this._searchPlanets(search),
        this._searchStarships(search),
      ]
    }

    return result;
  }

  _transformData(favoritesFilter) {
    return (acc, item) => {
      if (favoritesFilter) {
        const type = Object.keys(item);
        return {
          ...acc,
          [type]: {
            ...item[type],
            results: item[type].results.filter(
              element => element.favorites
            )
          }
        }
      }
      return {...acc, ...item };
    }
  }

  _checkType(type) {
    const allTypes = [CHARACTERS, PLANETS, STARSHIPS];
      
      if (allTypes.indexOf(type) < 0) {
        return false;
      }

      return true;
  }

  doSearch(filters, search) {
    const transformData = this._transformData(filters.favorites);
    return Promise.all(this._listSearchs(filters, search))
      .then((result) => result.reduce(transformData, {}))
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

  goToPage(type, favoritesFilter, urlPage) {
    return swapiDataSource.getByUrl(urlPage)
      .then(this._successManager(type))
      .then((data) => {
        if (favoritesFilter) {
          return {
            [type]: {
              ...data[type],
              results: data[type].results.filter((item) => item.favorites === favoritesFilter)
            }
          }
        }

        return data;
      })
      .catch(this._errorManager(type));
  }
}

const searchResultRepository = new SearchResultRepository();

export default searchResultRepository;