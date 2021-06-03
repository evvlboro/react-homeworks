// Instruments
import * as config from './config';

export const setActiveDayAction = (payload) => ({
    type: config.SET_ACTIVE_DAY,
    payload,
});

export const setFilterStateAction = (fieldName, value) => ({
    type: config.SET_FILTER_STATE,
    payload: {
        fieldName,
        value
    },
});

export const setTogglerStateAction = (fieldName) => ({
    type: config.SET_TOGGLER_STATE,
    payload: fieldName,
});

export const filterForecastAction = (isReset) => ({
    type: config.FILTER_FORECAST,
    payload: isReset
});
