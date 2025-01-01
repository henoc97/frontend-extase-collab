import ITask from '@/domain/entities/task.entity';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = `${process.env.ENDPOINT_BASE_URL}/tasks`;

export const TaskService = {
    async createTask(taskData: ITask): Promise<ITask> {
        const response = await axios.post(API_URL, taskData);
        return response.data as ITask;
    },

    async getTaskById(taskId: string): Promise<ITask> {
        const response = await axios.get(`${API_URL}/${taskId}`);
        return response.data as ITask;
    },

    async updateTask(taskId: string, updateData: Partial<ITask>): Promise<ITask> {
        const response = await axios.put(`${API_URL}/${taskId}`, updateData);
        return response.data as ITask;
    },

    async deleteTask(taskId: string): Promise<void> {
        await axios.delete(`${API_URL}/${taskId}`);

    },

    async getTasksByProjectId(projectId: string): Promise<ITask[]> {
        const response = await axios.get(`${API_URL}/project/${projectId}`);
        return response.data as ITask[];
    },

    async assignTask(taskId: string, userId: string): Promise<ITask> {
        const response = await axios.put(`${API_URL}/${taskId}/assign`, { userId });
        return response.data as ITask;
    },
};