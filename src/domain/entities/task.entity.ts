
export interface ITask {
    id: string;
    title: string;
    description?: string;
    dueDate?: Date;
    status: 'pending' | 'in progress' | 'completed';
    priority: 'Urgent' | 'Normal' | 'Low';
    projectId: string;
    comments?: string[];
    assignedTo?: string;
    createdAt?: Date;
    updatedAt?: Date;
}


export default ITask;