// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { peopleActions } from '../actions';

export const usePeopleFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(peopleActions.fetchAsync());
  }, [dispatch]);

  const {
    data,
    isFetching,
    error
  } = useSelector((state) => state.people);

  return {
    data,
    isFetching,
    error
  };
};
