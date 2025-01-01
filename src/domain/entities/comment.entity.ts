
export interface IComment {
    id: string;
    content: string;
    taskId: string;
    userId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IComment;
