import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreAPI } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreAPI.reducer]: shazamCoreAPI.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddlewareZ().concat(shazamCoreAPI.middleware)
});
