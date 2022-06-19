import {
  getCharactesPicture,
  getStarshipsPicture,
  getPlanetsPicture
} from '../helpers/get-pictures';
import { ERRORS_CODES } from '../helpers/errors-code';
import StarwarsError from '../helpers/startwars-error';

import swapiDataSource from '../datasource/swapi-datasource';

const CHARACTERS = 'characters';
const PLANETS = 'planets';
const STARSHIPS = 'starships';

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
      console.log(data);
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
        this._searchStarships(search)
      ]
    }

    return result;
  }

  doSearch(filters, search) {
    return Promise.all(this._listSearchs(filters, search))
      .then((result) => result.flat())
      .then((result) => result.reduce((acc, item) => {
        if (filters.favorites) {
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
      }, {}))
  }

  addFavorite(id, type) {
    const allTypes = [CHARACTERS, PLANETS, STARSHIPS];

    if (allTypes.indexOf(type) < 0) {
      throw new StarwarsError(ERRORS_CODES.NOT_VALID_TYPE, type, 'Invalid type of data');
    }

    if (this.favorites[type].indexOf(id) < 0) {
      this.favorites[type].push(id);
    }
  }
}

const searchResultRepository = new SearchResultRepository();

export default searchResultRepository;