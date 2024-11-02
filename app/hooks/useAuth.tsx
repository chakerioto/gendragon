//@ts-nocheck
// src/hooks/useAuth.ts
import { setCredentials } from '@/redux/slices/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';

export const useAuth = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const login = (user: User, accessToken: string, refreshToken: string) => {
        dispatch(setCredentials({ user, accessToken, refreshToken }));
    };

    const logoutUser = () => {
        dispatch(logout());
    };

    return {
        ...auth,
        login,
        logout: logoutUser,
    };
};