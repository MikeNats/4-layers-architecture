import {
  Identity
} from "../../../domain/identity/model";
import { AsyncReducer } from '../../types'

export interface IdentityReducer extends AsyncReducer{
  payload:Identity
} 

