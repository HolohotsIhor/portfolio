import { Middleware } from '@reduxjs/toolkit';
import { websiteActions } from '../website/website.slice';
import { REPO_STORAGE_KEY, LANG_STORAGE_KEY, THEME_STORAGE_KEY } from '../../helpers/constant';
import { githubActions } from '../github/github.slice.ts';

export const localStorageMiddleware: Middleware = ({ getState }) => next => action => {
    const result = next(action);
    const state = getState();

    // Website
    websiteActions.changeLanguage.match(action) && localStorage.setItem(LANG_STORAGE_KEY, action.payload);
    websiteActions.changeTheme.match(action) && localStorage.setItem(THEME_STORAGE_KEY, action.payload);

    // Github
    if (githubActions.addFavourite.match(action) || githubActions.removeFavourite.match(action)) {
        localStorage.setItem(REPO_STORAGE_KEY, JSON.stringify(state.github.favourites));
    }

    return result;
};
