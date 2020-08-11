import {
  Identity
} from "../../../../domain/identity/entity";
import { AsyncReducer } from '../../../types'

export interface IdentityReducer extends AsyncReducer{
  payload:Identity
}  

