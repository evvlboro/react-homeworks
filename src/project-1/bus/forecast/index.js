// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Action
import { fetchForecastSuccessAction } from './actions'

// Api
import { fetchForecast } from './api';

// Hooks
import { useUI } from '../ui';
// import moment from 'moment';

export const useForecastQuery = () => {
  const { setActiveDay } = useUI()
  const dispatch = useDispatch();

  const forecast = useSelector(({ forecast }) => forecast);

  const fetchForecastHandler = async () => {
    const forecast = await fetchForecast();

    dispatch(setActiveDay(forecast[0].day));

    dispatch(fetchForecastSuccessAction(forecast));
  }

  useEffect(() => {
    fetchForecastHandler()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return forecast;
};
