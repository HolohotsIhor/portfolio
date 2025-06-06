import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRepo, IUser, } from '../../models/models';
import { getUserRepos, searchUsers } from './githubThunk';
import { REPO_STORAGE_KEY } from '../../helpers/constant.ts';

interface usersState {
    users: IUser[],
    repos: IRepo[],
    favourites: string[],
    loading: boolean,
    error: string,
}

const initialState: usersState = {
    users: [],
    repos: [],
    favourites: JSON.parse(localStorage.getItem(REPO_STORAGE_KEY) || '[]'),
    loading: false,
    error: '',
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourite: (state, action: PayloadAction<string>) => {
            if (!state.favourites.includes(action.payload)) {
                state.favourites.push(action.payload);
            }
        },
        removeFavourite: (state, action: PayloadAction<string>) => {
            state.favourites = state.favourites.filter(item => item !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            // --- searchUsers ---
            .addCase(searchUsers.pending, (state) => {
                state.loading = true;
                state.error = '';
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
                state.error = '';
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
