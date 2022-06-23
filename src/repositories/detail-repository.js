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

const dataProperties = {
  [CHARACTERS]: ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'],
  [PLANETS]: ['name','rotation_period','orbital_period','diameter','climate','gravity','terrain','surface_water','population'],
  [STARSHIPS]: ['name','model','manufacturer','cost_in_credits','length','max_atmosphering_speed','crew','passengers','cargo_capacity','consumables','hyperdrive_rating','MGLT','starship_class']
}

const planetsProperties = {
  [CHARACTERS]: 'homeworld'
}
const charactersProperties = {
  [PLANETS]: 'residents',
  [STARSHIPS]: 'pilots'
};
const starshipsProperties = {
  [CHARACTERS]: 'starships'
};

class DetailRepository {

  _proccessRelatedData(data) {
    if (!Array.isArray(data)) {
      return [data];
    }

    return data;
  }

  _successManager(type) {
    return (data) => {
      const elementData = dataProperties[type]
        .reduce((acc, property) => ({
          ...acc,
          [property.replace(/_/g, ' ')]: data[property]
        }), {});

      elementData.picture = getPictures[type](data.name);

      const related = {
        [CHARACTERS]: (charactersProperties[type]) ? this._proccessRelatedData(data[charactersProperties[type]]) : null,
        [PLANETS]: (planetsProperties[type]) ? this._proccessRelatedData(data[planetsProperties[type]]) : null,
        [STARSHIPS]: (starshipsProperties[type]) ? this._proccessRelatedData(data[starshipsProperties[type]]) :  null
      }

      return { elementData, related };
    }
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
        request = swapiDataSource.getStarshipsInfo(id);
    }

    return request
      .then(this._successManager(type))
      .catch(this._errorManager(type));
  }
}

const detailRepository = new DetailRepository();

export default detailRepository;
