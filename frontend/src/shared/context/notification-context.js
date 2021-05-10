import { createContext } from 'react';

export const NotificationContext = createContext({
    type: null,
    message: null,
});
