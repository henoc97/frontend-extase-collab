import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducer/auth.reducer';
import commentReducer from '../reducer/comment.reducer';
import crewReducer from '../reducer/crew.reducer';
import notificationReducer from '../reducer/notification.reducer';
import projectReducer from '../reducer/project.reducer';
import taskReducer from '../reducer/task.reducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        comments: commentReducer,
        crews: crewReducer,
        notifications: notificationReducer,
        projects: projectReducer,
        tasks: taskReducer,
    },
});

// Définition des types RootState et AppDispatch pour TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
