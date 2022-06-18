import './starwars-detail.css';

import StarwarsStarButton from '../starwars-star-button/starwars-star-button';

function StarwarsDetail({
  id,
  type,
  mainTitle,
  mainImage,
  mainData,
  favorite,
  footerLeftTitle,
  footerRightTitle,
  footerLeft,
  footerRight,
  changeFavorite
}) {

  const isThereAnyFooter = footerLeft && footerLeftTitle;

  const footer = () => {
    let result = null;
    let footerOne = null;
    let footerTwo = null;
    let numberFooters = 0;

    if (footerLeft && footerLeftTitle) {
      numberFooters++;
      footerOne = (
        <div className='detail_footer_container left'>
          <div className="detail_footer_title left">{footerLeftTitle}</div>
          <div className="detail_footer_body left">
            {footerLeft}
          </div>
        </div>
      );

      footerTwo = (<></>);

      if (footerRight && footerRightTitle) {
        numberFooters++;
        footerTwo = (
          <div className='detail_footer_container right'>
            <div className="detail_footer_title right">{footerRightTitle}</div>
            <div className="detail_footer_body right">
              {footerRight}
            </div>
          </div>
        );
      }

      result = (
        <div className={`detail_footer ${numberFooters === 1 ? 'one_footer' : ''}`}>
          {footerOne}
          {footerTwo}
        </div>
      );
    }
    return result;
  }

  const onChangeFavorite = (event) => {
    changeFavorite({ id, type, favorite: event});
  }

  return (
    <div className={`detail_container ${!isThereAnyFooter ? 'no_footer' : ''}`}>
      <div className="detail_header">
        <StarwarsStarButton active={favorite} clickStar={onChangeFavorite} />
        <div className="detail_header_title">
          {mainTitle}
        </div>
      </div>
      <div className={`detail_body ${!isThereAnyFooter ? 'no_footer' : ''}`}>
        <img
          src={mainImage}
          alt={mainTitle}
          className="detail_body_img"
        />
        <div className="detail_body_left">
          {mainData}
        </div>
      </div>
      {footer()}
    </div>
  );
}

export default StarwarsDetail;