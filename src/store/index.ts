import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { websiteSlice } from './website/website.slice.ts';

export const store = configureStore({
    reducer: {
        website: websiteSlice.reducer,
    },
})

// Re fetch for RTK query
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
