/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import StarwarsDetail from "../../components/starwars-detail/starwars-detail";
import StarwarsRenderData from '../../components/starwars-render-data/starwars-render-data';

import { requestDetail } from '../detail-thunks';
import {
  detailErrorSelector,
  detailDataSelector
} from '../detail-selectors';

function GenericDetailContainer() {

  const { id, type } = useParams();
  const dispatch = useDispatch();
  const errorDetail = useSelector(detailErrorSelector);
  const navigate = useNavigate();
  const {name, picture, favorite, detailData} = useSelector(detailDataSelector);

  console.log('NNN detailData: ', favorite);

  const renderDetail = () => {
    let result = (<></>);

    if (detailData) {
      result = (
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

    return result;
  }

  useEffect(() => {
    if (errorDetail) { 
      navigate('/');
    } else {
      dispatch(requestDetail(id, type));
    }
  }, [errorDetail]);

  return renderDetail();
}

export default GenericDetailContainer;
