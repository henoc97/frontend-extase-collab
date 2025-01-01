import { AuthService } from '../service/auth.service';
import { loginRequest, loginSuccess, loginFailure, logout } from '../reducer/auth.reducer';

export const loginAction = (credentials: { email: string; password: string }) => async (dispatch: any) => {
    dispatch(loginRequest());
    try {
        const user = await AuthService.login(credentials);
        dispatch(loginSuccess(user));
    } catch (error: any) {
        dispatch(loginFailure(error.message));
    }
};

export const logoutAction = () => (dispatch: any) => {
    dispatch(logout());
}; 