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
const mockRepo: IRepo[] = [
    {
        id: 123456,
        node_id: 'MDEwOlJlcG9zaXRvcnkxMjM0NTY=',
        name: 'example-repo',
        full_name: 'ihor/example-repo',
        private: false,
        owner: {
            login: 'ihor',
            id: 1,
            node_id: 'MDQ6VXNlcjE=',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/ihor',
            html_url: 'https://github.com/ihor',
            followers_url: 'https://api.github.com/users/ihor/followers',
            following_url: 'https://api.github.com/users/ihor/following{/other_user}',
            gists_url: 'https://api.github.com/users/ihor/gists{/gist_id}',
            starred_url: 'https://api.github.com/users/ihor/starred{/owner}{/repo}',
            subscriptions_url: 'https://api.github.com/users/ihor/subscriptions',
            organizations_url: 'https://api.github.com/users/ihor/orgs',
            repos_url: 'https://api.github.com/users/ihor/repos',
            events_url: 'https://api.github.com/users/ihor/events{/privacy}',
            received_events_url: 'https://api.github.com/users/ihor/received_events',
            type: 'User',
            site_admin: false,
        },
        html_url: 'https://github.com/ihor/example-repo',
        description: 'This is a mock repository',
        fork: false,
        url: 'https://api.github.com/repos/ihor/example-repo',
        forks_url: '',
        keys_url: '',
        collaborators_url: '',
        teams_url: '',
        hooks_url: '',
        issue_events_url: '',
        events_url: '',
        assignees_url: '',
        branches_url: '',
        tags_url: '',
        blobs_url: '',
        git_tags_url: '',
        git_refs_url: '',
        trees_url: '',
        statuses_url: '',
        languages_url: '',
        stargazers_url: '',
        contributors_url: '',
        subscribers_url: '',
        subscription_url: '',
        commits_url: '',
        git_commits_url: '',
        comments_url: '',
        issue_comment_url: '',
        contents_url: '',
        compare_url: '',
        merges_url: '',
        archive_url: '',
        downloads_url: '',
        issues_url: '',
        pulls_url: '',
        milestones_url: '',
        notifications_url: '',
        labels_url: '',
        releases_url: '',
        deployments_url: '',
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-06-01T00:00:00Z',
        pushed_at: '2024-06-15T00:00:00Z',
        git_url: 'git://github.com/ihor/example-repo.git',
        ssh_url: 'git@github.com:ihor/example-repo.git',
        clone_url: 'https://github.com/ihor/example-repo.git',
        svn_url: 'https://svn.github.com/ihor/example-repo',
        homepage: 'https://example.com',
        size: 1234,
        stargazers_count: 42,
        watchers_count: 42,
        language: 'TypeScript',
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 5,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 3,
        license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://opensource.org/licenses/MIT',
            node_id: 'MDc6TGljZW5zZW1pdA==',
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ['typescript', 'redux', 'react'],
        visibility: 'public',
        forks: 5,
        open_issues: 3,
        watchers: 42,
        default_branch: 'main',
    },
];

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
