'use client';

import React, { useState, createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({
  authenticated: false,
  login: (inputPassword: string) => {},
  password: '',
  setPassword: (password: string) => {},
  errorMessage: '',
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const login = (inputPassword: string) => {
    if (inputPassword === 'yuseiakane') {
      setAuthenticated(true);
      setErrorMessage('');
      router.push('/introduction');
    } else {
      setErrorMessage('認証できませんでした。パスワードが間違っています。');
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, password, setPassword, errorMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
