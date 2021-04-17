import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { connect } from 'react-redux';
// import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';

const contactsPersistConfige = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfige, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

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
