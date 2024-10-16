// AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Auth } from '../auth/auth';

interface AuthContextType {
  user: any; 
  login: (userData: any) => void; 
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null); 

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      { user ? 
        children : <Auth />
      }
    </AuthContext.Provider>
  );
};
