import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');
const setUsers = (users) => localStorage.setItem('users', JSON.stringify(users));
const getCurrentUser = () => JSON.parse(localStorage.getItem('currentUser') || 'null');
const setCurrentUser = (user) => localStorage.setItem('currentUser', JSON.stringify(user));
const removeCurrentUser = () => localStorage.removeItem('currentUser');

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getCurrentUser());

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const register = (username, email, password) => {
    const users = getUsers();
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Пользователь с таким email уже существует.' };
    }
    const newUser = { username, email, password };
    users.push(newUser);
    setUsers(users);
    setCurrentUser(newUser);
    setUser(newUser);
    return { success: true };
  };

  const login = (email, password) => {
    const users = getUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setCurrentUser(found);
      setUser(found);
      return { success: true };
    }
    return { success: false, message: 'Неверный email или пароль.' };
  };

  const logout = () => {
    removeCurrentUser();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}; 