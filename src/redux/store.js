import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'app/Save_contact':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, payload],
//         },
//       };

//     case 'app/Update_filter': {
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           filter: payload,
//         },
//       };
//     }
//     case 'app/Delete_contact':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...payload],
//         },
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
// export default store;
