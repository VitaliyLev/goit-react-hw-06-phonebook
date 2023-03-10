import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit'

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   contacts:persistedReducer,
  //   filter:filterReducer,
  // },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
