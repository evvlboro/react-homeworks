// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { filmActions } from '../actions';

export const useFilmFetch = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filmActions.fetchAsync(id));
  }, [dispatch, id]);

  const {
    data,
    isFetching,
    error
  } = useSelector((state) => state.film);

  return {
    data,
    isFetching,
    error
  };
};
