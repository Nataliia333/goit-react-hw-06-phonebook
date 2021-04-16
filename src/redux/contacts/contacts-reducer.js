import { combineReducers } from 'redux';
import actionsTypes from './contacts-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.SAVE:
      return [...state, payload];
    case actionsTypes.DELETE:
      return [...payload];
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionsTypes.UPDATE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
