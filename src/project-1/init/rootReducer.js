import { combineReducers } from 'redux';

import { forecastReducer as forecast } from '../bus/forecast/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
  forecast,
  ui
});
