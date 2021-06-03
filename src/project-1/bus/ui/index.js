// Core
import { useDispatch, useSelector } from 'react-redux';

// Action
import {
  setActiveDayAction,
  setFilterStateAction,
  setTogglerStateAction,
  filterForecastAction
} from './actions'

export const useUI = () => {
  const ui = useSelector(({ ui }) => ui);
  const dispatch = useDispatch();

  const setActiveDay = (payload) => dispatch(setActiveDayAction(payload));
  const setFilterState = (fieldName, value) => dispatch(setFilterStateAction(fieldName, value));
  const setTogglerState = (fieldName) => dispatch(setTogglerStateAction(fieldName));
  const filterForecast = ({ isReset } = { isReset: false }) => dispatch(filterForecastAction(isReset));

  return {
    ui,
    setActiveDay,
    setFilterState,
    setTogglerState,
    filterForecast,
  };
}
