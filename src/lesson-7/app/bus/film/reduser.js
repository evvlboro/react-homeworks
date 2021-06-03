// Types
import { types } from './types'

const initialState = {
  data: null,
  isFetching: false,
  error: null
}

export const filmReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILM_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.FILM_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.FILM_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null
      };
    case types.FILM_FILL:
      return {
        ...state,
        error: null,
        data: payload
      };

    default:
      return state;
  }
};
