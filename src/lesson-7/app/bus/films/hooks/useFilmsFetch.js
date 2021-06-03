// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { filmsActions } from '../actions';

export const useFilmsFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filmsActions.fetchAsync());
  }, [dispatch]);

  const {
    data,
    isFetching,
    error
  } = useSelector((state) => state.films);

  return {
    data,
    isFetching,
    error
  };
};
