
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const loginUser = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    setUserData(userData);
  };

  const logoutUser = () => {
    localStorage.removeItem('userData');
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
