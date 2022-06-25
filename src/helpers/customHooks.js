/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ACCORDION_STATES } from '../components/starwars-accordion/starwars-accordion-states';
import { setFavorites, paginationThunk } from '../search-module/search-thunks';
import { detailGridDataSelector } from '../detail-module/detail-selectors';

export function useAccordionState(selector) {
  const [accordionState, updateAccordionState] = useState(ACCORDION_STATES.CLOSE);
  const { results, pagination } = useSelector(selector);


  useEffect(() => {
    if (results.length) {
      updateAccordionState(ACCORDION_STATES.OPEN);
    } else if (accordionState === ACCORDION_STATES.OPEN) {
      updateAccordionState(ACCORDION_STATES.CLOSE);
    }

  }, [results]);

  return [
    accordionState,
    results,
    pagination,
    () => {
      if (accordionState === ACCORDION_STATES.OPEN) {
        updateAccordionState(ACCORDION_STATES.CLOSE);
      } else {
        updateAccordionState(ACCORDION_STATES.OPEN);
      }
    }
  ];
}

export function useElementFavorite() {
  const dispatch = useDispatch();

  return event => {
    dispatch(setFavorites(event.id, event.type, event.favorite));
  };
}

export function usePagination(selector, type) {
  const { pagination } = useSelector(selector);
  const dispatch = useDispatch();

  return [
    () => {
      dispatch(paginationThunk(type, pagination.prevPage));
    },
    () => {
      dispatch(paginationThunk(type, pagination.nextPage));
    }
  ]
}

export function useNavigateToDetail() {
  const navigate = useNavigate();
  
  return ({id, type}) => {
    navigate(`/detail/${type}/${id}`);
  }
}

export function useDetailFooterList(type, size) {
  const fullDataList = useSelector(detailGridDataSelector(type));
  const [offset, updateOffset] = useState(0);
  const [ dataList, updateDataList ] = useState([]);

  const isTherePrevPage = () => offset - size >= 0;
  const isThereNextPage = () => offset + size < fullDataList.length;

  const goPrevPage = () => {
    updateOffset(offset - size);
    updateDataList(fullDataList.slice(offset - size, offset));
  }

  const goNextPage = () => {
    updateOffset(offset + size);
    updateDataList(fullDataList.slice(offset, offset + size));
  }

  return {
    dataList,
    isTherePrevPage,
    isThereNextPage,
    goPrevPage,
    goNextPage
  };
}

