import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/state.types';

const initialState: UserState = {
    loading: false,
    error: null,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.user = action.payload;
        },
        fetchUserFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        resetUser(state) {
            state.loading = false;
            state.error = null;
            state.user = null;
        },
    },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure, resetUser } = userSlice.actions;
export default userSlice.reducer;
