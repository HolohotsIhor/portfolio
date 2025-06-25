import { githubReducer, githubActions } from './github.slice';
import { REPO_STORAGE_KEY } from '../../helpers/constant.ts';
import { configureStore } from '@reduxjs/toolkit';
import { expect, MockedFunction } from 'vitest';
import { IRepo } from '../../models/models.ts';
import { getUserRepos } from './githubThunk.ts';
import axios from 'axios';

const { addFavourite, removeFavourite} = githubActions;
const REPO_TEST_NAME = 'repo-test';
const REPO_TEST_NAME_2 = 'repo-test-2';

// Test Thunk
// global.fetch = vi.fn(); // Fake mocked function. like a window.fetch for browsers
vi.mock('axios');
const mockedAxiosGet = axios.get as MockedFunction<typeof axios.get>;
const mockRepo: IRepo[] = [];

describe('fetch todos thunk', () => {
    beforeEach(() => {
        mockedAxiosGet.mockReset();
    });

    it('dispatches fulfilled on success', async () => {
        mockedAxiosGet.mockResolvedValueOnce({
            data: mockRepo,
        });

        const store = configureStore({ reducer: { github: githubReducer } });

        await store.dispatch(getUserRepos('username'));

        const state = store.getState().github;
        expect(state.loading).toBe(false);
        expect(state.repos).toEqual(mockRepo);
    });
});

// Test Slice
describe('github reducer', () => {
    it('Should handle initial state', () => {
        expect(githubReducer(undefined, { type: 'unknown' })).toEqual({
            users: [],
            repos: [],
            favourites: JSON.parse(localStorage.getItem(REPO_STORAGE_KEY) || '[]'),
            loading: false,
            error: '',
        });
    });
    it('should add a favourite', () => {
        const initialState = {
            users: [],
            repos: [],
            favourites: [],
            loading: false,
            error: '',
        };
        const action = addFavourite(REPO_TEST_NAME);
        const state = githubReducer(initialState, action);
        expect(state.favourites).toContain(REPO_TEST_NAME);
    });

    it('should not add a duplicate favourite', () => {
        const initialState = {
            users: [],
            repos: [],
            favourites: [REPO_TEST_NAME],
            loading: false,
            error: '',
        };
        const action = addFavourite(REPO_TEST_NAME);
        const state = githubReducer(initialState, action);
        expect(state.favourites).toContain(REPO_TEST_NAME);
    });

    it('should remove a favourite', () => {
        const initialState = {
            users: [],
            repos: [],
            favourites: [REPO_TEST_NAME, REPO_TEST_NAME_2],
            loading: false,
            error: '',
        };
        const action = removeFavourite(REPO_TEST_NAME_2);
        const state = githubReducer(initialState, action);
        expect(state.favourites).toContain(REPO_TEST_NAME);
    });
});
