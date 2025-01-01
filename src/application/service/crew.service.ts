import ICrew from '@/domain/entities/crew.entity';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = `${process.env.ENDPOINT_BASE_URL}/crews`;

export const CrewService = {
    async createCrew(crewData: ICrew): Promise<ICrew> {
        const response = await axios.post(API_URL, crewData);
        return response.data as ICrew;
    },

    async getCrewById(crewId: string): Promise<ICrew> {
        const response = await axios.get(`${API_URL}/${crewId}`);
        return response.data as ICrew;
    },

    async updateCrew(crewId: string, updateData: any): Promise<ICrew> {
        const response = await axios.put(`${API_URL}/${crewId}`, updateData);
        return response.data as ICrew;
    },

    async deleteCrew(crewId: string): Promise<void> {
        const response = await axios.delete(`${API_URL}/${crewId}`);
        console.log(response.data);
    },
}; 