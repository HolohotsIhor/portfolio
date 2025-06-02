import { Middleware } from '@reduxjs/toolkit';
import { websiteActions } from '../website/website.slice';
import { LANG_STORAGE_KEY, THEME_STORAGE_KEY } from '../../helpers/constant';

export const localStorageMiddleware: Middleware = () => next => action => {
    const result = next(action);

    websiteActions.changeLanguage.match(action) && localStorage.setItem(LANG_STORAGE_KEY, action.payload);
    websiteActions.changeTheme.match(action) && localStorage.setItem(THEME_STORAGE_KEY, action.payload);

    return result;
};
