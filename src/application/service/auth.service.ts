import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = `${process.env.ENDPOINT_BASE_URL}/auth`;

export const AuthService = {
    async login(credentials: { email: string; password: string }): Promise<any> {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    },

    async googleAuth(): Promise<any> {
        const response = await axios.get(`${API_URL}/google`);
        return response.data;
    },

    async protectedRoute(): Promise<void> {
        // La logique pour les routes protégées peut être gérée par middleware
        // Pas besoin d'implémenter ici
    },
}; 