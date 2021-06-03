// API
import { api } from '../../../api';

// Types
import { types } from './types';

export const filmsActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.FILMS_START_FETCHING
    };
  },
  stopFetching: () => {
    return {
      type: types.FILMS_STOP_FETCHING
    };
  },
  fill: (payload) => {
    return {
      type: types.FILMS_FILL,
      payload
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.FILMS_SET_FETCHING_ERROR,
      error: true,
      payload: error
    };
  },

  // Async
  fetchAsync: () => async (dispatch) => {
    dispatch(filmsActions.startFetching());

    const response = await api.films.fetch();

    if (response.status === 200) {
      const {results} = await response.json();

      dispatch(filmsActions.fill(results));
    } else {
      const error = {
        status: response.status
      };

      dispatch(filmsActions.setFetchingError(error));
    }

    dispatch(filmsActions.stopFetching());
  }

});
