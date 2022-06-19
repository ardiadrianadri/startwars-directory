import { useState } from 'react';

import searchResultRepository from '../../repositories/search-result-repository';
import StarwarsModalError from '../../components/starwars-modal-error/starwars-modal-error';
import StarwarsLoadingScreen from '../../components/starwars-loading-screen/starwars-loading-screen';
import StarwarsButton from '../../components/starwars-button/starwars-button';
import { BUTTON_COLORS, BUTTON_SIZES } from '../../components/starwars-button/button-constants';

function ExampleResultRepository({filters, search}) {
  const [showLoading, updateShowLoading] = useState(false);
  const [showError, updateShowError] = useState(false);
  const [errorTitle, updateErrorTitle] = useState('');
  const [errorMessage, updateErrorMessage] = useState('');
  const [resultData, updateResultData] = useState('');

  const onCloseError = () => {
    updateShowError(false);
  };

  const errorManager = (err) => {
    console.log(err);
    updateErrorTitle('Repository Error');
    updateErrorMessage(err.message);
    updateShowLoading(false);
    updateShowError(true);
  };

  const successManager = (data) => {
    updateShowLoading(false);
    updateResultData(JSON.stringify(data));
  };

  const onLaunchSearch = () => {
    updateShowLoading(true);
    searchResultRepository.doSearch(filters, search)
      .then(successManager)
      .catch(errorManager);
  };

  return (
    <>
      <StarwarsLoadingScreen showLoading={showLoading} />
      <StarwarsModalError
        showError={showError}
        title={errorTitle}
        message={errorMessage}
        closeModal={onCloseError}
      />
      <code>
        {resultData}
      </code><br/>
      <StarwarsButton color={BUTTON_COLORS.PRIMARY} size={BUTTON_SIZES.MEDIUM}>
        <button type='button' onClick={onLaunchSearch}>Do search</button>
      </StarwarsButton>
    </>
  );
}

export default ExampleResultRepository;
