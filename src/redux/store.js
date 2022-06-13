// import phonebookReducer from './phonebook-reducers';
// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// export const store = configureStore({
//   reducer: { contacts: phonebookReducer },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
// });

import phonebookReducer from './phonebook-reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { contacts: phonebookReducer },
});
