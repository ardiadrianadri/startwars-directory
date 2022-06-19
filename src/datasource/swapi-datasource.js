import axios from 'axios';

const baseUrl = 'https://swapi.dev/api/';

class SwapiDataSource {

  searchCharacters(filter) {
    return this._search('people', filter);
  }

  searchPlanets(filter) {
    return this._search('planets', filter);
  }

  searchStarships(filter) {
    return this._search('starships', filter);
  }

  searchVehicles(filter) {
    return this._search('vehicles', filter);
  }

  getCharacerInfo(id) {
    return this._getTypeInfo('people', id);
  }

  getPlanetInfo(id) {
    return this._getTypeInfo('planets', id);
  }

  getStarshipsInfo(id) {
    return this._getTypeInfo('starships', id);
  }

  getVehicleInfo(id) {
    return this._getTypeInfo('vehicles', id);
  }

  getByUrl(url) {
    return axios.get(url).then((result) => result.data);
  }

  _search(type, filter) {
    return axios.get(`${baseUrl}${type}?search=${filter}`).then((result) => result.data);
  }

  _getTypeInfo(type, id) {
    return axios.get(`${baseUrl}${type}/${id}`).then((result) => result.data);
  }
}

const swapiDataSource = new SwapiDataSource();

export default swapiDataSource;