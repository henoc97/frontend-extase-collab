import { NotificationService } from '../service/notification.service';
import { fetchNotificationsRequest, fetchNotificationsSuccess, fetchNotificationsFailure, addNotification, deleteNotification } from '../reducer/notification.reducer';

export const fetchNotificationsAction = (userId: string) => async (dispatch: any) => {
    dispatch(fetchNotificationsRequest());
    try {
        const notifications = await NotificationService.getNotificationsByUserId(userId);
        dispatch(fetchNotificationsSuccess(notifications));
    } catch (error: any) {
        dispatch(fetchNotificationsFailure(error.message));
    }
};

export const createNotificationAction = (notificationData: any) => async (dispatch: any) => {
    dispatch(fetchNotificationsRequest());
    try {
        const newNotification = await NotificationService.createNotification(notificationData);
        dispatch(addNotification(newNotification));
    } catch (error: any) {
        dispatch(fetchNotificationsFailure(error.message));
    }
};

export const removeNotificationAction = (notificationId: string) => async (dispatch: any) => {
    dispatch(fetchNotificationsRequest());
    try {
        await NotificationService.deleteNotification(notificationId);
        dispatch(deleteNotification(notificationId));
    } catch (error: any) {
        dispatch(fetchNotificationsFailure(error.message));
    }
}; 