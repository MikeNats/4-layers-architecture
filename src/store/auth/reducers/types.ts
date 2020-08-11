import { AsyncReducer } from '../../types'

export interface AuthReducer extends AsyncReducer{
  authenticated:boolean
} 