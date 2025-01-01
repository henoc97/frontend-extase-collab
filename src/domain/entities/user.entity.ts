
export interface IUser {
    id: string;
    googleId: string;
    name: string;
    email: string;
    password?: string | null;
    comments?: string[];
    createdAt?: Date;
    updatedAt?: Date;

}
export default IUser;
