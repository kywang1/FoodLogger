import {FETCH_DINNER,DELETE_DINNER} from '../actions/index';
import _ from 'lodash';

export default function(state = {},action){
  switch (action.type) {
    case FETCH_DINNER:
      return {...state,[action.payload.food]:action.payload};
    case DELETE_DINNER:
      return _.omit(state,action.payload);
    default:
      return state;
  }
}
