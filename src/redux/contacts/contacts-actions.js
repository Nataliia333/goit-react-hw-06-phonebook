import { v4 as uuidv4 } from 'uuid';
import actionsTypes from './contacts-types';

export const addContact = ({ name, number }) => ({
  type: actionsTypes.SAVE,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});
export const deleteContact = value => ({
  type: actionsTypes.DELETE,
  payload: value,
});
export const updateFilter = value => ({
  type: actionsTypes.UPDATE_FILTER,
  payload: value,
});
