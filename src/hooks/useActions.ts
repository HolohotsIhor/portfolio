import { bindActionCreators } from '@reduxjs/toolkit';
import { websiteActions } from '../store/website/website.slice.ts';
import { useTypedDispatch } from './useRedux.ts';

const actions = {
 ...websiteActions,
}

export const useAction = () => {
    const dispatch = useTypedDispatch()
    // Bind actions and dispatch
    return bindActionCreators(actions, dispatch)
}
