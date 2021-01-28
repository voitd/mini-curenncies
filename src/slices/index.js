import { combineReducers } from 'redux';
import ratesReducer from './ratesReducer';

const rootReducer = combineReducers({
  currency: ratesReducer,
});

export default rootReducer;
