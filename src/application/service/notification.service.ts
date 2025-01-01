import INotification from '@/domain/entities/notification.entity';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = `${process.env.ENDPOINT_BASE_URL}/notifications`;

export const NotificationService = {
    async createNotification(notificationData: INotification): Promise<INotification> {
        const response = await axios.post(API_URL, notificationData);
        return response.data as INotification;
    },

    async getNotificationsByUserId(userId: string): Promise<INotification[]> {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data as INotification[];
    },

    async deleteNotification(notificationId: string): Promise<void> {
        const response = await axios.delete(`${API_URL}/${notificationId}`);
        console.log(response.data);
    },
}; 