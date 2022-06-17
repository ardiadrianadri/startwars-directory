import './starwars-star-button.css';

function StarwarsStarButton ({active, clickStar}) {
  const onClickStar = () => {
    clickStar(!active);
  }

  return (
    <button
      type="button"
      onClick={onClickStar}
      className={`star-button_button ${active ? 'active' : ''}`}
    ></button>
  )
}

export default StarwarsStarButton;

