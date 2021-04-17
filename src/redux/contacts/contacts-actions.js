import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// import actionsTypes from './contacts-types';

const addContact = createAction('app/Save_contact', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('app/Delete_contact');
const updateFilter = createAction('app/Update_filter');

export default { addContact, deleteContact, updateFilter };
// export const addContact = ({ name, number }) => ({
//   type: actionsTypes.SAVE,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });
// export const deleteContact = value => ({
//   type: actionsTypes.DELETE,
//   payload: value,
// });
// export const updateFilter = value => ({
//   type: actionsTypes.UPDATE_FILTER,
//   payload: value,
// });
