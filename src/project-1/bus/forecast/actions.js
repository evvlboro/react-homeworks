// Instruments
import * as config from './config';

export const fetchForecastSuccessAction = (forecast) => ({
    type:    config.FETCH_MANY.SUCCESS,
    payload: forecast,
});
