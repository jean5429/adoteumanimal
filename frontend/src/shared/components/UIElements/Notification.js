import React from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Notification = (props) => {
    console.log(props);
    const Toast = (type, message) => {
        var defaultTypes = [
            'info',
            'success',
            'warning',
            'error',
            'default',
            'dark',
        ];
        if (defaultTypes.indexOf(type) > -1) {
            console.log(type);
            toast[type](message);
        }
    };
    return <ToastContainer>{Toast(props.type)}</ToastContainer>;
};

export default Notification;
