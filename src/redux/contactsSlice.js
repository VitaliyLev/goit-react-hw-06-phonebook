import { createSlice } from "@reduxjs/toolkit";
import contacts from '../dataContacts/contacts.json';

const contactsInitialState = contacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact (state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'contacts',
//   storage,
// }

// export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);