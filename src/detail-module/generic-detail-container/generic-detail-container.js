/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import StarwarsDetail from "../../components/starwars-detail/starwars-detail";
import StarwarsRenderData from '../../components/starwars-render-data/starwars-render-data';
import GridDetailFooter from '../grid-detail-footer/grid-detail-footer';

import { requestDetail } from '../detail-thunks';
import {
  detailErrorSelector,
  detailDataSelector,
  detailSizeGridFooters,
  detailGetListFooters
} from '../detail-selectors';
import { cleanDetail } from '../detail-slice';

function GenericDetailContainer() {

  const { id, type } = useParams();
  const dispatch = useDispatch();
  const errorDetail = useSelector(detailErrorSelector);
  const navigate = useNavigate();
  const {name, picture, favorite, detailData} = useSelector(detailDataSelector);
  const listFooterSize = useSelector(detailSizeGridFooters);
  const listFooters = useSelector(detailGetListFooters);

  console.log('NNN detailData: ', favorite);

  const rederStarwarsDetail = () => {
    if (listFooters.length === 0) {
      return (
        <StarwarsDetail
          id={id}
          type={type}
          mainTitle={name}
          mainImage={picture}
          mainData={<StarwarsRenderData data={Object.entries(detailData)} />}
          favorite={favorite}
        />
      );
    }

    if (listFooters.length === 1) {
      const footer = (
        <GridDetailFooter size={listFooterSize} type={listFooters[0]}/>
      );

      return (
        <StarwarsDetail
          id={id}
          type={type}
          mainTitle={name}
          mainImage={picture}
          mainData={<StarwarsRenderData data={Object.entries(detailData)} />}
          favorite={favorite}
          footerLeftTitle={listFooters[0]}
          footerLeft={footer}
        />
      );
    }

    if (listFooters.length === 2) {
      const footerLeft = (
        <GridDetailFooter size={listFooterSize} type={listFooters[0]}/>
      );
      const footerRight = (
        <GridDetailFooter size={listFooterSize} type={listFooters[1]}/>
      );

      return (
        <StarwarsDetail
          id={id}
          type={type}
          mainTitle={name}
          mainImage={picture}
          mainData={<StarwarsRenderData data={Object.entries(detailData)} />}
          favorite={favorite}
          footerLeftTitle={listFooters[0]}
          footerLeft={footerLeft}
          footerRightTitle={listFooters[1]}
          footerRight={footerRight}
        />
      );
    }
  }

  const renderDetail = () => {
    let result = (<></>);

    if (detailData) {
      result = rederStarwarsDetail();
    }

    return result;
  }

  useEffect(() => {
    if (errorDetail) { 
      navigate('/');
    } else {
      dispatch(requestDetail(id, type));
    }

    return () => {
      dispatch(cleanDetail());
    }
  }, [errorDetail]);

  return renderDetail();
}

export default GenericDetailContainer;
