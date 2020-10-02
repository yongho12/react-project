import React, { useState } from 'react';
import App from '../App';
import { UserContext } from './UserContext';

const AppWithContext = () => {
    const localStorageToken = localStorage.getItem('state-diagnostic-token');
    const [authToken, setAuthToken] = useState(localStorageToken);
    const [needLogin, setNeedLogin] = useState(!localStorageToken);

    const login = (token) => {
        window.localStorage.setItem('state-diagnostic-token', token);
        setAuthToken(token);
        setNeedLogin(false);
    };

    return (
        <UserContext.Provider
            value={{
                authToken,
                needLogin,
                login,
            }} >
            <App />
        </UserContext.Provider>
    );
};

export default AppWithContext;
