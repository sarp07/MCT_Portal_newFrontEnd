// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(() => {
        const storedAuthData = JSON.parse(localStorage.getItem('authData')) || { token: null };
        return storedAuthData;
    });

    const login = (token, userId) => {
        setAuthData({ token, userId });
        localStorage.setItem('authData', JSON.stringify({ token, userId }));
    };

    const logout = () => {
        setAuthData({ token: null, userId: null });
        localStorage.removeItem('authData');
    };

    return (
        <AuthContext.Provider value={{ ...authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
