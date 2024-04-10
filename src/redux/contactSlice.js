import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filter: ''
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
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
export const contactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);