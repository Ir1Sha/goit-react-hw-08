import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error('Failed to load contacts');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data: contacts } = await api.get('/contacts');

      const isDuplicate = contacts.some(
        (item) =>
          item.name.trim().toLowerCase() === contact.name.trim().toLowerCase()
      );

      if (isDuplicate) {
        toast.error(`Contact "${contact.name}" already exists!`);
        return thunkAPI.rejectWithValue(
          `Contact "${contact.name}" already exists.`
        );
      }

      const response = await api.post('/contacts', contact);
      toast.success(`Contact "${contact.name}" added!`);
      return response.data;
    } catch (error) {
      toast.error('Failed to add contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await api.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted!');
      return contactId;
    } catch (error) {
      toast.error('Failed to delete contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await api.patch(`/contacts/${id}`, { name, number });
      toast.success(`Contact "${name}" updated!`);
      return response.data;
    } catch (error) {
      toast.error('Failed to update contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
