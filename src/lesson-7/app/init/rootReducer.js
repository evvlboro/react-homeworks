import { combineReducers } from 'redux';

import { peopleReducer as people } from '../bus/people/reduser';
import { filmsReducer as films } from '../bus/films/reduser';
import { filmReducer as film } from '../bus/film/reduser';
import { personReducer as person } from '../bus/person/reduser';

export const rootReducer = combineReducers({
  people,
  person,
  films,
  film
})
