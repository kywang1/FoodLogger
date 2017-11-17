import {FETCH_BREAKFAST,DELETE_BREAKFAST} from '../actions/index';
import _ from 'lodash';

export default function(state = {},action){
  switch (action.type) {
    case FETCH_BREAKFAST:
      return {...state,[action.payload.food]:action.payload};
    case DELETE_BREAKFAST:
      return _.omit(state,action.payload);
    default:
      return state;
  }
}
