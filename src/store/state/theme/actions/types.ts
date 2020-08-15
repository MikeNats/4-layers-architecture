import { Action } from 'redux'

 
export enum THEME_ACTION_TYPES {
  SET_THEME = 'SET_THEME ',
} 

export interface SetTheme extends Action {
  type: THEME_ACTION_TYPES.SET_THEME,
  theme: string
}


export type ThemeActionTypes = SetTheme;