
import { THEME_ACTION_TYPES, ThemeActionTypes } from '../actions/types'
import { THEMES } from '../../../../enums'


const initialTheme = localStorage.getItem('theme') || THEMES.DARK
export const themeReducer = (state: string = initialTheme, action: ThemeActionTypes): string  => {
  switch (action.type) {
    case THEME_ACTION_TYPES.SET_THEME:
      return action.theme
    default:
      return state
    }
  } 