import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  return (
    <AuthContext.Provider value={{ auth, setAuth, userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
