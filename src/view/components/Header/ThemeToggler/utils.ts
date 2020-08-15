import { THEMES } from '../../../../enums'
import { Options }  from '../../common/Select/types'

const options: Options = [
  { name:THEMES.LIGHT, value:THEMES.LIGHT }, 
  { name:THEMES.DARK, value:THEMES.DARK }]
export const setSelectedTheme = (theme: string): Options => 
  options.map(option => 
    theme === option.name ?  Object.assign(option, {selected: true})  :  option)