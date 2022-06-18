import './starwars-modal-error.css';

import StarwarsButton from '../starwars-button/starwars-button';
import { BUTTON_COLORS, BUTTON_SIZES } from '../starwars-button/button-constants';
import StarwarsModalScreen from '../starwars-modal-screen/starwars-modal-screen';

import closeIcon from '../../resources/icons/close-icon.svg';
import errorGif from '../../resources/gifs/error.gif';

function StarwarsModalError({showError, title, message, closeModal}) {
  return (
    <StarwarsModalScreen show={showError}>
      <div className="modal-error_container">
        <div className="modal-error_header">
          <div className="modal-error_header_title">{title}</div>
          <button type="button" className="modal-error_header_close-button" onClick={closeModal}>
            <img src={closeIcon} alt="close modal" className="modal-error_header_close-button_img" />
          </button>
        </div>
        <div className="modal-error_body">
          <img src={errorGif} alt="error" className="modal-error_body_img" />
          <div className="modal-error_body_message">{message}</div>
        </div>
        <div className="modal-error_footer">
          <StarwarsButton color={BUTTON_COLORS.ALERT} size={BUTTON_SIZES.MEDIUM}>
            <button type="button" onClick={closeModal}>Close</button>
          </StarwarsButton>
        </div>
      </div>
    </StarwarsModalScreen>
  );
}

export default StarwarsModalError;
