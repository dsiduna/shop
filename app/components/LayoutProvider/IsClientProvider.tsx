'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface IsClientContextProps {
  isClient: boolean;
}

const IsClientCtx = createContext<IsClientContextProps>({ isClient: false });

interface IsClientCtxProviderProps {
  children: ReactNode;
}

export const IsClientCtxProvider: React.FC<IsClientCtxProviderProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={{ isClient }}>{children}</IsClientCtx.Provider>
  );
};

export function useIsClient(): boolean {
  return useContext(IsClientCtx).isClient;
}
