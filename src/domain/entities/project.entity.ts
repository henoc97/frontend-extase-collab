
export interface IProject {
    id: string
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IProject;
