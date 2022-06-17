import 'starwars-small-card.css';

import StarwarsButton from '../starwars-button/starwars-button';
import { BUTTON_COLORS, BUTTON_SIZES} from '../starwars-button/button-constants';

function StarwarsSmallCard({id, title, image, selected}) {
  const onCardSelected = () => {
    selected(id);
  }
  return (
    <div className="starwars-card_container">
      <div className="starwars-card_header">{title}</div>
      <div className="starwars-card_body">
        <img src={image} alt={title} className="starwars-card_body-img" />
      </div>
      <div className="starwars-card_footer">
        <StarwarsButton size={BUTTON_SIZES.SMALL} color={BUTTON_COLORS.SECONDARY}>
          <button type="button" onClick={onCardSelected}>Details</button>
        </StarwarsButton>
      </div>
    </div>
  );
}

export default StarwarsSmallCard;