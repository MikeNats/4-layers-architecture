import React from 'react';
export  type JsonStringType =  {[x: string]: string}
export type AppContextType = {
  authenticated: boolean,
  theme: string, 
  config: JsonStringType,
  userId: number | null,
  setConfig: Function
  setAuth: Function
}
export const initialAppContext: AppContextType= {  
  authenticated: false,
  setAuth: function(userId: number) {this.userId = userId;this.authenticated = true},
  userId: null,
  config: {},
  setConfig: function(config: JsonStringType) {this.config = config},
  theme: 'dark'
}

export const AppContext = React.createContext<Partial<AppContextType>>({})