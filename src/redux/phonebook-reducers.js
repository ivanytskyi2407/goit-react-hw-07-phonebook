import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './phoonebook-actions';
import { fetchContacts, addContact, removeContact } from './phoneBookOperation';

console.log(addContact);

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, ...payload],
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });
// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
// });

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  // isLoading,
  // error,
  filter,
});
