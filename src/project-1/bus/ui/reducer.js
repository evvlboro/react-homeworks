// Tools
import * as config from './config';

const filterState = {
  sunny: false,
  cloudy: false,
  minTemp: '',
  maxTemp: '',
}

const initialState = {
  activeDay: null,
  isFilterActive: false,
  filterState
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case config.SET_ACTIVE_DAY:
      return {
        ...state,
        activeDay: action.payload
      };

    case config.FILTER_FORECAST:
      if (action.payload) { // isReset
        return {
          ...state,
          filterState,
          isFilterActive: false,
        };
      }

      return {
        ...state,
        isFilterActive: true,
      };


    case config.SET_FILTER_STATE:
      return {
        ...state,
        filterState: {
          ...state.filterState,
          [ action.payload.fieldName ]: action.payload.value,
        }
      };

    case config.SET_TOGGLER_STATE:
      switch (action.payload) { // cloudy || sunny
        case 'cloudy':
          return {
            ...state,
            filterState: {
              ...state.filterState,
              cloudy: !state.filterState.cloudy,
              sunny: false
            }
          }

        case 'sunny':
          return {
            ...state,
            filterState: {
              ...state.filterState,
              cloudy: false,
              sunny: !state.filterState.sunny,
            }
          }


        default: return state
      }


    default: return state;
  }
};
