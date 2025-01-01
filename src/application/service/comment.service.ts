import IComment from '@/domain/entities/comment.entity';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = `${process.env.ENDPOINT_BASE_URL}/comments`;

export const CommentService = {
    async createComment(commentData: IComment): Promise<IComment> {
        const response = await axios.post(API_URL, commentData);
        return response.data as IComment;
    },

    async getCommentById(commentId: string): Promise<IComment> {
        const response = await axios.get(`${API_URL}/${commentId}`);
        return response.data as IComment;
    },

    async updateComment(commentId: string, updateData: any): Promise<IComment> {
        const response = await axios.put(`${API_URL}/${commentId}`, updateData);
        return response.data as IComment;
    },

    async deleteComment(commentId: string): Promise<void> {
        const response = await axios.delete(`${API_URL}/${commentId}`);
        console.log(response.data);
    },
}; 