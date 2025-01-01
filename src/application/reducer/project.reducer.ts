import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectState } from '../types/state.types';

const initialState: ProjectState = {
    loading: false,
    error: null,
    projects: [],
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        fetchProjectsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProjectsSuccess(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.projects = action.payload;
        },
        fetchProjectsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addProject(state, action: PayloadAction<any>) {
            state.projects.push(action.payload);
        },
        deleteProject(state, action: PayloadAction<string>) {
            state.projects = state.projects.filter(project => project.id !== action.payload);
        },
        updateProject(state, action: PayloadAction<any>) {
            const index = state.projects.findIndex(project => project.id === action.payload.id);
            if (index !== -1) {
                state.projects[index] = action.payload;
            }
        },
    },
});

export const { fetchProjectsRequest, fetchProjectsSuccess, fetchProjectsFailure, addProject, updateProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer; 