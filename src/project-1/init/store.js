import {createStore, applyMiddleware} from 'redux';

//Core
import {rootReducer} from './rootReducer';
import {composeEnhancers, middleware} from './middleware';

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));