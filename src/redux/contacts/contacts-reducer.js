import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import actionsTypes from './contacts-types';
import actions from './contacts-actions';

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.updateFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionsTypes.SAVE:
//       return [...state, payload];
//     case actionsTypes.DELETE:
//       return [...payload];
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionsTypes.UPDATE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
