
import { THEME_ACTION_TYPES, SetTheme } from './types'

export const setTheme = (theme: string): SetTheme => ({
  type: THEME_ACTION_TYPES.SET_THEME,
  theme
})