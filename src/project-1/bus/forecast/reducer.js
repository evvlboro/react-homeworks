//Tools
import * as config from './config';

const initialState = [];

export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case config.FETCH_MANY.SUCCESS:
            return action.payload;

        default: return state;
    }
};
