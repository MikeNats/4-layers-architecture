import React from 'react';

export type AppContextType = {
  authenticated: boolean,
  lang: string,
  theme: string
}
export const initialAppContext: AppContextType= { 
  authenticated: false,
  lang: 'en',
  theme: 'dark'
}
export const AppContext = React.createContext<Partial<AppContextType>>({})