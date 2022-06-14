import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  filterContacts,
} from './phoonebook-actions';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './phoonebook-actions';

// const initialStateContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const items = createReducer(initialStateContacts, {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [removeContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });
const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
});
const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});
const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  filter,
});
