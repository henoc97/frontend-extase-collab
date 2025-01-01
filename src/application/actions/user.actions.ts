import IUser from '@/domain/entities/user.entity';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure, resetUser } from '../reducer/user.reducer';
import { UserService } from '../service/user.service';

// Action pour récupérer un utilisateur
export const fetchUser = (userId: string) => async (dispatch: any) => {
    dispatch(fetchUserRequest());
    try {
        const user = await UserService.getUserById(userId);
        dispatch(fetchUserSuccess(user));
    } catch (error: any) {
        dispatch(fetchUserFailure(error.message));
    }
};

// Action pour créer un utilisateur
export const createUser = (userData: IUser) => async (dispatch: any) => {
    dispatch(fetchUserRequest());
    try {
        const newUser = await UserService.createUser(userData);
        dispatch(fetchUserSuccess(newUser));
    } catch (error: any) {
        dispatch(fetchUserFailure(error.message));
    }
};

// Action pour mettre à jour un utilisateur
export const updateUser = (userId: string, updateData: any) => async (dispatch: any) => {
    dispatch(fetchUserRequest());
    try {
        const updatedUser = await UserService.updateUser(userId, updateData);
        dispatch(fetchUserSuccess(updatedUser));
    } catch (error: any) {
        dispatch(fetchUserFailure(error.message));
    }
};

// Action pour supprimer un utilisateur
export const deleteUser = (userId: string) => async (dispatch: any) => {
    dispatch(fetchUserRequest());
    try {
        await UserService.deleteUser(userId);
        dispatch(resetUser()); // Réinitialiser l'état après la suppression
    } catch (error: any) {
        dispatch(fetchUserFailure(error.message));
    }
};

// Action pour réinitialiser l'utilisateur
export const resetUserAction = () => (dispatch: any) => {
    dispatch(resetUser());
};
