import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';

export const useStudent = () => {
  const selector = (state) => state.student;
  const { data } = useSelector(selector);
  const dispatch = useDispatch();

  const fillStudent = (profile) => {
    const action = userActions.fillProfile(profile);
    dispatch(action);
  }

  return {
    student: data,
    fillStudent,
  }
}
