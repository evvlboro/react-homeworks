// Types
import { types } from './types'

const initialState = {
  data: null,
  isFetching: false,
  error: null
}

export const personReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PERSON_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.PERSON_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.PERSON_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null
      };
    case types.PERSON_FILL:
      return {
        ...state,
        error: null,
        data: payload
      };

    default:
      return state;
  }
};
