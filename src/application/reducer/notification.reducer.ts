import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationState } from '../types/state.types';

const initialState: NotificationState = {
    loading: false,
    error: null,
    notifications: [],
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        fetchNotificationsRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchNotificationsSuccess(state, action: PayloadAction<any[]>) {
            state.loading = false;
            state.notifications = action.payload;
        },
        fetchNotificationsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addNotification(state, action: PayloadAction<any>) {
            state.notifications.push(action.payload);
        },
        deleteNotification(state, action: PayloadAction<string>) {
            state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
        },
    },
});

export const { fetchNotificationsRequest, fetchNotificationsSuccess, fetchNotificationsFailure, addNotification, deleteNotification } = notificationSlice.actions;
export default notificationSlice.reducer; 