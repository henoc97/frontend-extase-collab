import IUser from '@/domain/entities/user.entity';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = `${process.env.ENDPOINT_BASE_URL}/users`;

export const UserService = {
    async createUser(userData: IUser) {
        const response = await axios.post(API_URL, userData);
        return response.data;
    },

    async getUserById(userId: string) {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    },

    async updateUser(userId: string, updateData: any) {
        const response = await axios.put(`${API_URL}/${userId}`, updateData);
        return response.data;
    },

    async deleteUser(userId: string) {
        const response = await axios.delete(`${API_URL}/${userId}`);
        return response.data;
    },
};
