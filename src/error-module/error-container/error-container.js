import { useState } from 'react';
import { useSelector } from 'react-redux';

import StarwarsModalError from '../../components/starwars-modal-error/starwars-modal-error';
import { searchErrorSelector } from '../../search-module/search-selectors';

function ErrorContainer() {
  const error = useSelector(searchErrorSelector);
  const [ showError, updateShowError ] = useState(!!(error));

  let title = error?.title;
  let message = error?.message;

  const onCloseError = () => {
    updateShowError(false);
  }

  return (
    <StarwarsModalError
      showError={showError}
      title={title}
      message={message}
      closeModal={onCloseError}
    />
  );
}

export default ErrorContainer;
