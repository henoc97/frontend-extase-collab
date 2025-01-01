import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentState } from '../types/state.types';

const initialState: CommentState = {
    loading: false,
    error: null,
    comments: [],
};

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        fetchCommentsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchCommentsSuccess(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.comments = action.payload;
        },
        fetchCommentsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addComment(state, action: PayloadAction<any>) {
            state.comments.push(action.payload);
        },
        deleteComment(state, action: PayloadAction<string>) {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
    },
});

export const { fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsFailure, addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer; 