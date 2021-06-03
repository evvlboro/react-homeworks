// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { personActions } from '../actions';

export const usePerson = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(personActions.fetchAsync(id));
  }, [dispatch, id]);

  const {
    data,
    isFetching,
    error
  } = useSelector((state) => state.person);

  return {
    data,
    isFetching,
    error
  };
};
