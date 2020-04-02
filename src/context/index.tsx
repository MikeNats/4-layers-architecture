import React from 'react';

export type AppContextType = {
  authenticated: boolean,
  theme: string, 
  setAuth: Function
}
export const initialAppContext: AppContextType= { 
  authenticated: false,
  setAuth: function() {this.authenticated = true},
  theme: 'dark'
}

export const AppContext = React.createContext<Partial<AppContextType>>({})