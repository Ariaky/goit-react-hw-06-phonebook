import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
/*import { nanoid } from 'nanoid/non-secure';*/

import initialContacts from '../components/data/contacts.json'

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { 
    list: initialContacts,
    filter: ''
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    }
  }
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact, updateFilter } = contactSlice.actions;
/*export default contactSlice.reducer;*/
export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);