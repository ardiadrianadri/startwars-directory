import { useState} from 'react';

import swapiDataSource from '../../datasource/swapi-datasource';
import StarwarsLoadingScreen from '../../components/starwars-loading-screen/starwars-loading-screen';
import StarwarsModalError from '../../components/starwars-modal-error/starwars-modal-error';
import StarwarsButton from '../../components/starwars-button/starwars-button';
import { BUTTON_COLORS, BUTTON_SIZES } from '../../components/starwars-button/button-constants';

function ExampleSwapiDataSource({type, filter, id}) {
  const [showLoading, updateShowLoading] = useState(false);
  const [showError, updateShowError] = useState(false);
  const [swapiData, updateSwapiData] = useState('');
  const [errorTitle, updateErrorTitle] = useState('');
  const [errorMsg, updateErrorMsg] = useState('');

  const closeModal = () => {
    updateShowError(false);
  };

  const errorManager = (err) => {
    updateErrorTitle('Service error');
    updateErrorMsg(err.message || 'Error calling service');
    updateShowLoading(false);
    updateShowError(true);
  }

  const successManager = (data) => {
    updateShowLoading(false);
    updateSwapiData(JSON.stringify(data));
  }

  const onLaunchSearch = () => {
    updateShowLoading(true);
    switch(type) {
      case 'characters':
        swapiDataSource.searchCharacters(filter)
          .then(successManager)
          .catch(errorManager);
      break;
      case 'planets':
        swapiDataSource.searchPlanets(filter)
          .then(successManager)
          .catch(errorManager);
      break;
      case 'starships':
        swapiDataSource.searchStarships(filter)
          .then(successManager)
          .catch(errorManager);
      break;
      case 'vehicles':
        swapiDataSource.searchVehicles(filter)
          .then(successManager)
          .catch(errorManager);
      break;
      default:
        updateErrorTitle('Unkown type');
        updateErrorMsg('Type for search unkown');
        updateShowLoading(false);
        updateShowError(true);
    }
  }

  const onGetIdInfo = () => {
    updateShowLoading(true);
    switch(type) {
      case 'characters':
        swapiDataSource.getCharacerInfo(id)
          .then(successManager)
          .catch(errorManager);
      break;
      case 'planets':
        swapiDataSource.getPlanetInfo(id)
          .then(successManager)
          .catch(errorManager);
      break;
      case 'starships':
        swapiDataSource.getStarshipsInfo(id)
          .then(successManager)
          .catch(errorManager);
      break;
      case 'vehicles':
        swapiDataSource.getVehicleInfo(id)
          .then(successManager)
          .catch(errorManager);
      break;
      default:
        updateErrorTitle('Unkown type');
        updateErrorMsg('Type for search unkown');
        updateShowLoading(false);
        updateShowError(true);
    }
  }

  return (
    <>
      <StarwarsLoadingScreen showLoading={showLoading}/>
      <StarwarsModalError
        showError={showError}
        title={errorTitle}
        message={errorMsg}
        closeModal={closeModal}
      />
      <code>
        {swapiData}
      </code><br/>
      <StarwarsButton color={BUTTON_COLORS.PRIMARY} size={BUTTON_SIZES.MEDIUM}>
        <button type='button' onClick={onLaunchSearch}>Search Info</button>
      </StarwarsButton><br/>
      <StarwarsButton color={BUTTON_COLORS.SECONDARY} size={BUTTON_SIZES.MEDIUM}>
        <button type='button' onClick={onGetIdInfo}>Get id info</button>
      </StarwarsButton>
    </>
  );
}

export default ExampleSwapiDataSource;