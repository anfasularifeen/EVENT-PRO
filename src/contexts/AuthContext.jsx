import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null = logged out

  // Simulate a CLIENT login
  const login = (email, password) => {
    if (email.toLowerCase() === 'fadi@client.com') {
      setUser({ id: 'c1', name: 'Fadi Subair', email: 'fadi@client.com' });
      return true;
    }
    return false;
  };

  // Simulate a CLIENT registration
  const register = (name, email) => {
    const newUser = {
      id: 'c_new',
      name: name,
      email: email
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access the CLIENT auth state
export const useAuth = () => {
  return useContext(AuthContext);
};