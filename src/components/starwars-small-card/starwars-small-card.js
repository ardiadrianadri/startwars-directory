import './starwars-small-card.css';

import StarwarsButton from '../starwars-button/starwars-button';
import { BUTTON_COLORS, BUTTON_SIZES} from '../starwars-button/button-constants';
import StarwarsStarButton from '../starwars-star-button/starwars-star-button';

function StarwarsSmallCard({id, title, image, favorite, selected, changeFavorite}) {
  const onCardSelected = () => {
    selected(id);
  }

  const onFavoriteChange = (event) => {
    changeFavorite({ id, favorite: event});
  }

  return (
    <div className="starwars-card_container">
      <div className="starwars-card_header">
          <StarwarsStarButton active={favorite} clickStar={onFavoriteChange}/>
          <div className="starwars-card_header_title">{title}</div>
      </div>
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