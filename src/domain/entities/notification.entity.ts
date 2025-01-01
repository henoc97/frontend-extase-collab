
export interface INotification {
    id: string;
    title: string;
    content: string;
    type?: string;
    sendTo: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default INotification;