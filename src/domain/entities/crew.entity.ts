
export interface ICrew {
    id: string;
    title: string;
    projectId: string;
    crewDirector?: string;
    members: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export default ICrew;
