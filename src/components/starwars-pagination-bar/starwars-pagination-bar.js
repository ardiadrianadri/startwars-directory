import './starwars-pagination-bar.css';

import buttonPaginationIcon from '../../resources/icons/icon-pag-bar.svg';
import buttonPaginationDisabledIcon from '../../resources/icons/icon-pag-bar-disabled.svg';

function StarwarsPaginationBar ({isThereNextPage, isTherePrevPage, goNext, goPrev}) {

  const imgNext = (isThereNextPage) ? buttonPaginationIcon : buttonPaginationDisabledIcon;
  const imgPrev = (isTherePrevPage) ? buttonPaginationIcon : buttonPaginationDisabledIcon;

  return (
    <div className="pagination-bar_container">
      <button type='button' onClick={goPrev} className="pagination-bar_button previous" disabled={!isTherePrevPage}>
        <img src={imgPrev} className="pagination-bar_btn-icon previous" alt="previous page"/>
      </button>
      <button type='button' onClick={goNext} className="pagination-bar_button next" disabled={!isThereNextPage}>
        <img src={imgNext} className="pagination-bar_btn-icon next" alt="next page" />
      </button>
    </div>
  );
}

export default StarwarsPaginationBar;