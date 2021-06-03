// Core
import { combineReducers } from 'redux';

// Reducers
import { studentReducer as student } from '../bus/student/reducer';

export const rootReducer = combineReducers({
  student
});
