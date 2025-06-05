import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GITHUB_URL } from '../../helpers/constant.ts';
import axios from 'axios';
import { IRepo, IUser, ServerResponse } from '../../models/models.ts';

export const getUserRepos = createAsyncThunk<IRepo[], string>(
    'github/getUserRepos',
    async (username: string) => {
        try {
            const response = await axios.get<ServerResponse<IRepo>>(`${GITHUB_URL}users/${username}/repos`);
            return response.data;
        } catch (error: any) {
            return `Unable to get repositories. ${error}`;
        }
    }
)

export const searchUsers = createAsyncThunk<IUser[], string>(
    'github/searchUsers',
    async (search) => {
        try {
            const response = await axios.get<ServerResponse<IUser>>(`${GITHUB_URL}search/users`, {
                params: {
                    q: search,
                    per_page: 10,
                },
            });
            return response.data.items;
        } catch (error: any) {
            return `Unable to get users. ${error}`;
        }
    }
);
