import { bindActionCreators } from '@reduxjs/toolkit';
import { websiteActions } from '../store/website/website.slice.ts';
import { useTypedDispatch } from './useRedux.ts';
import { githubActions } from '../store/github/github.slice.ts';

const actions = {
 ...websiteActions,
 ...githubActions,
}

export const useAction = () => {
    const dispatch = useTypedDispatch()
    // Bind actions and dispatch
    return bindActionCreators(actions, dispatch)
}
