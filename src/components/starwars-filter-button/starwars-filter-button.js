import './starwars-fiilter-button.css';
import { FILTER_BUTTON_STATES } from './starwars-filter-button-states';

function StarwarsFilterButton({title, image, active, changeState}) {
  const buttonContent = image
    ? (<img src={image} alt={title} className="filter-button_img" />)
    : (<span className="filter-button_title">{title}</span>);

  const onChageState = () => {
    switch(active) {
      case FILTER_BUTTON_STATES.ACTIVATE:
        changeState(FILTER_BUTTON_STATES.DEACTIVATE);
      break;
      default:
        changeState(FILTER_BUTTON_STATES.ACTIVATE);
    }
  };

  return (
    <button type='button' className={`filter-button_container ${!active ? '' : active}`} onClick={onChageState}>
      {buttonContent}
    </button>
  );
}

export default StarwarsFilterButton;