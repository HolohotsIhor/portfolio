import { createAsyncThunk } from '@reduxjs/toolkit';
import { GITHUB_URL } from '../../helpers/constant.ts';
import axios from 'axios';
import { IRepo, IUser, ServerResponse } from '../../models/models.ts';

export const getUserRepos = createAsyncThunk<IRepo[], string, { rejectValue: string }>(
    'github/getUserRepos',
    async (username, thunkAPI) => {
        try {
            const response = await axios.get<IRepo[]>(`${GITHUB_URL}users/${username}/repos`);
            return response.data; // это уже IRepo[]
        } catch (error: any) {
            return thunkAPI.rejectWithValue(`Unable to get repositories. ${error.message || error}`);
        }
    }
);

export const searchUsers = createAsyncThunk<IUser[], string, { rejectValue: string }>(
    'github/searchUsers',
    async (search, thunkAPI) => {
        try {
            const response = await axios.get<ServerResponse<IUser>>(`${GITHUB_URL}search/users`, {
                params: {
                    q: search,
                    per_page: 10,
                },
            });
            return response.data.items;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(`Unable to get users. ${error.message || error}`);
        }
    }
);
