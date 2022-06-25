import {
  getCharactesPicture,
  getStarshipsPicture,
  getPlanetsPicture
} from '../helpers/get-pictures';
import { ERRORS_CODES } from '../helpers/errors-code';
import StarwarsError from '../helpers/starwars-error';

import swapiDataSource from '../datasource/swapi-datasource';
import {
  CHARACTERS,
  PLANETS,
  STARSHIPS
} from '../helpers/starwars-types';
import favoritesRepository from './favorites-repository';

const getPictures = {
  [CHARACTERS]: getCharactesPicture,
  [PLANETS]: getPlanetsPicture,
  [STARSHIPS]: getStarshipsPicture
}

class SearchResultRepository {

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
          favorites: favoritesRepository.existInFavorites(id, type)
        }
      });

      const pagination = {
        nextPage: data?.next,
        prevPage: data?.previous,
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

  doSearch(filters, search) {
    const transformData = this._transformData(filters.favorites);
    return Promise.all(this._listSearchs(filters, search))
      .then((result) => result.reduce(transformData, {}))
  }

  addFavorite(id, type) {
    favoritesRepository.addFavorite(id, type);
  }

  removeFavorite(id, type) {
    favoritesRepository.removeFavorite(id, type);
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

  getResultByUrlList(urlList, type) {
    return Promise.all(urlList.map((url) => swapiDataSource.getByUrl(url)))
      .then((listResults) => {
        return this._successManager(type)({
          results: listResults
        });
      })
      .then((data) => {
        const { results } = data[type];

        return results;
      })
      .catch(this._errorManager(type));
  }
}

const searchResultRepository = new SearchResultRepository();

export default searchResultRepository;