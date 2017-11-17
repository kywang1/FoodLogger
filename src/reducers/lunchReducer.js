import {FETCH_LUNCH,DELETE_LUNCH} from '../actions/index';
import _ from 'lodash';

export default function(state = {},action){
  switch (action.type) {
    case FETCH_LUNCH:
      return {...state,[action.payload.food]:action.payload};
    case DELETE_LUNCH:
      return _.omit(state,action.payload);
    default:
      return state;
  }
}
