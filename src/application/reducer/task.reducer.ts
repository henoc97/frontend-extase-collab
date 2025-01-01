import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskState } from '../types/state.types';

const initialState: TaskState = {
    loading: false,
    error: null,
    tasks: [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        fetchTasksRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchTasksSuccess(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.tasks = action.payload;
        },
        fetchTasksFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addTask(state, action: PayloadAction<any>) {
            state.tasks.push(action.payload);
        },
        deleteTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateTask(state, action: PayloadAction<any>) {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
    },
});

export const { fetchTasksRequest, fetchTasksSuccess, fetchTasksFailure, addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer; 