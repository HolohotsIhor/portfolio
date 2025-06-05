import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRepo, IUser, } from '../../models/models';
import { getUserRepos, searchUsers } from './githubThunk';

interface usersState {
    users: IUser[],
    repos: IRepo[],
    loading: boolean,
    error: string,
}

const initialState: usersState = {
    users: [],
    repos: [],
    loading: false,
    error: '',
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // --- searchUsers ---
            .addCase(searchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(searchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch users';
            })

            // --- getUserRepos ---
            .addCase(getUserRepos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserRepos.fulfilled, (state, action: PayloadAction<IRepo[]>) => {
                state.loading = false;
                state.repos = action.payload;
            })
            .addCase(getUserRepos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch repos';
            });
    }
})

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
