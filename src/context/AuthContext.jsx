import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage on load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    // Mock Login Logic
    if (username === 'supplier' && password === '123456') {
      const userData = { name: '供应商用户', role: 'supplier', username };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } else if (username === 'buyer' && password === '123456') {
      const userData = { name: '采购方用户', role: 'buyer', username };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } else {
      return { success: false, message: '用户名或密码错误' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
