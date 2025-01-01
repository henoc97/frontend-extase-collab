import IProject from '@/domain/entities/project.entity';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = `${process.env.ENDPOINT_BASE_URL}/projects`;

export const ProjectService = {
    async createProject(projectData: IProject): Promise<IProject> {
        const response = await axios.post(API_URL, projectData);
        return response.data as IProject;
    },

    async getProjectById(projectId: string): Promise<IProject> {
        const response = await axios.get(`${API_URL}/${projectId}`);
        return response.data as IProject;
    },

    async updateProject(projectId: string, updateData: any): Promise<IProject> {
        const response = await axios.put(`${API_URL}/${projectId}`, updateData);
        return response.data as IProject;
    },

    async deleteProject(projectId: string): Promise<void> {
        await axios.delete(`${API_URL}/${projectId}`);
        return;
    },

    async getAllProjects(): Promise<IProject[]> {
        const response = await axios.get(API_URL);
        return response.data as IProject[];
    },
}; 