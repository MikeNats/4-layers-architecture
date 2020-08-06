import React from 'react';
export type AppContextType = {
  authenticated: boolean,
  theme: string, 
  userId: number | null,
  setAuth: Function
}
export const initialAppContext: AppContextType= {  
  authenticated: false,
  setAuth: function(userId: number) {this.userId = userId;this.authenticated = true},
  userId: null,
  theme: 'dark'
}

export const AppContext = React.createContext<Partial<AppContextType>>({})