import { bindActionCreators } from '@reduxjs/toolkit';
import { websiteActions } from '../store/website/website.slice.ts';
import { useAppDispatch } from './useRedux.ts';
import { githubActions } from '../store/github/github.slice.ts';

const actions = {
 ...websiteActions,
 ...githubActions,
}

export const useAction = () => {
    const dispatch = useAppDispatch()
    // Bind actions and dispatch
    return bindActionCreators(actions, dispatch)
}
