import { combineReducers } from 'redux';
import breakfastReducer from './breakfastReducer';
import lunchReducer from './lunchReducer';
import dinnerReducer from './dinnerReducer';

const rootReducer = combineReducers({
  breakfastFoods:breakfastReducer,
  lunchFoods:lunchReducer,
  dinnerFoods:dinnerReducer
});

export default rootReducer;
