import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { websiteReducer } from './website/website.slice.ts';
import { localStorageMiddleware } from './middleware/localStorageMiddleware.ts';
import { githubReducer } from './github/github.slice.ts';

export const store = configureStore({
    reducer: {
        website: websiteReducer,
        github: githubReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(localStorageMiddleware),
})

// Re fetch for RTK query
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
