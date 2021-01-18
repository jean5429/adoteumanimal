import { createContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    userName: null,
    userImage: null,
    userId: null,
    userType: null,
    login: () => {},
    logout: () => {},
});
