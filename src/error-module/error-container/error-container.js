import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import StarwarsModalError from '../../components/starwars-modal-error/starwars-modal-error';
import { searchErrorSelector } from '../../search-module/search-selectors';
import { detailErrorSelector } from '../../detail-module/detail-selectors';

function ErrorContainer() {
  const errorSearch = useSelector(searchErrorSelector);
  const errorDetail = useSelector(detailErrorSelector);
  const [ showError, updateShowError ] = useState(!!(errorSearch));

  let title = errorSearch?.title || errorDetail?.title;
  let message = errorSearch?.message || errorDetail?.message;

  const onCloseError = () => {
    updateShowError(false);
  }

  useEffect(() => {
    updateShowError(!!(errorSearch || errorDetail));
  }, [errorSearch, errorDetail]);

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
