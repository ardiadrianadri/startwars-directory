/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ACCORDION_STATES } from '../components/starwars-accordion/starwars-accordion-states';
import { setFavorites, paginationThunk } from '../search-module/search-thunks';

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

