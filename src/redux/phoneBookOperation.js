import { contactsAPI, createContact, deleteContact } from '../contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await contactsAPI();
    return response;
  }
);
export const addContact = createAsyncThunk('contacts/add', async contact => {
  const response = createContact(contact);
  return response;
});
export const removeContact = createAsyncThunk('contacts/delete', async id => {
  const response = deleteContact(id);
  return response;
});
