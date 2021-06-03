// API
import { api } from '../../../api';

// Types
import { types } from './types';

export const personActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.PERSON_START_FETCHING
    };
  },
  stopFetching: () => {
    return {
      type: types.PERSON_STOP_FETCHING
    };
  },
  fill: (payload) => {
    return {
      type: types.PERSON_FILL,
      payload
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.PERSON_SET_FETCHING_ERROR,
      error: true,
      payload: error
    };
  },

  // Async
  fetchAsync: (id) => async (dispatch) => {
    dispatch(personActions.startFetching());

    const response = await api.person.fetch(id);

    if (response.status === 200) {
      const results = await response.json();

      dispatch(personActions.fill(results));
    } else {
      const error = {
        status: response.status
      };

      dispatch(personActions.setFetchingError(error));
    }

    dispatch(personActions.stopFetching());
  }

});
