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
      console.log('NNN results: ', data);
      const results = data.results.map(item => ({
            id: item.id,
            type: type,
            name: item.name,
            picture: getPictures[type](item.name),
            favorite: false,
          }));
      const pagination = {
        [type]: {
          nextPage: data.next,
          prevPage: data.previous,
        }
      }

      return {
        pagination,
        results,
      }
    }
  }

  _listSearchs(filters, search) {
    let result = [];

    const searchCharacters = swapiDataSource.searchCharacters(search)
      .then(this._successManager(CHARACTERS))
      .catch(this._errorManager(CHARACTERS));

    const searchPlanets = swapiDataSource.searchPlanets(search)
      .then(this._successManager(PLANETS))
      .catch(this._errorManager(PLANETS));

    const searchStarships = [
      swapiDataSource.searchStarships(search)
        .then(this._successManager(STARSHIPS))
        .catch(this._errorManager(STARSHIPS)),
      swapiDataSource.searchVehicles(search)
        .then(this._successManager(STARSHIPS))
        .catch(this._errorManager(STARSHIPS))
    ]

    if (filters.characters) {
      result.push(searchCharacters);
    }

    if (filters.planets) {
      result.push(searchPlanets);
    }

    if (filters.starships) {
      result = result.concat(searchStarships);
    }

    if (!result.length) {
      result = [
        searchCharacters,
        searchPlanets,
        ...searchStarships
      ]
    }

    return result;
  }

  doSearch(filters, search) {
    return Promise.all(this._listSearchs(filters, search))
      .then((result) => result.flat())
      .then((result) => result.reduce((acc, item) => {
        acc.pagination = {...acc.pagination, ... item.pagination };
        acc.results = acc.results.concat(item.results);

        return acc;
      }, { pagination: {}, results: [] }))
      .then((data) => ({
        ...data,
        results: data.results.sort((itemA, itemB) => itemA.name < itemB.name ? -1 : 1),
      }))
  }
}

const searchResultRepository = new SearchResultRepository();

export default searchResultRepository;