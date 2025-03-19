import React, { createContext, ReactNode, useContext } from 'react';

import { useAppwrite } from '../hooks/useAppwrite';
import { getCurrentUser } from '../lib/appwrite';

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams?: any) => Promise<void>;
}

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const {
    data: user,
    loading,
    refetch,
  } = useAppwrite({
    fn: getCurrentUser,
  });

  const isLoggedIn = true;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user: user!,
        loading,
        refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuthContext must be used within the AuthProvider');

  return context;
};

export default AuthProvider;
