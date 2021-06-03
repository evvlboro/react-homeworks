// API
import { api } from '../../../api';

// Types
import { types } from './types';

export const filmActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.FILM_START_FETCHING
    };
  },
  stopFetching: () => {
    return {
      type: types.FILM_STOP_FETCHING
    };
  },
  fill: (payload) => {
    return {
      type: types.FILM_FILL,
      payload
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.FILM_SET_FETCHING_ERROR,
      error: true,
      payload: error
    };
  },

  // Async
  fetchAsync: (id) => async (dispatch) => {
    dispatch(filmActions.startFetching());

    const response = await api.film.fetch(id);

    if (response.status === 200) {
      const results = await response.json();

      dispatch(filmActions.fill(results));
    } else {
      const error = {
        status: response.status
      };

      dispatch(filmActions.setFetchingError(error));
    }

    dispatch(filmActions.stopFetching());
  }

});
