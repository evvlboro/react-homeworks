// Types
import { types } from './types'

const initialState = {
  data: null,
  isFetching: false,
  error: null
}

export const filmsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FILMS_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.FILMS_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.FILMS_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null
      };
    case types.FILMS_FILL:
      return {
        ...state,
        error: null,
        data: payload
      };

    default:
      return state;
  }
};
