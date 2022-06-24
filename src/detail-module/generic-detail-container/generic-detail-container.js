/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import StarwarsDetail from "../../components/starwars-detail/starwars-detail";

import { requestDetail } from '../detail-thunks';
import { detailErrorSelector } from '../detail-selectors';

function GenericDetailContainer() {

  const { id, type } = useParams();
  const dispatch = useDispatch();
  const errorDetail = useSelector(detailErrorSelector);
  const navigate = useNavigate();

  dispatch(requestDetail(id, type));

  if (errorDetail) { 
    navigate('/');
  }


  return (
    <h1>This will be the detail container</h1>
  );
}

export default GenericDetailContainer;
