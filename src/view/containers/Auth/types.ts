import { AsyncReducer } from '../../../store/types'
import { Identity }  from '../../../domain/identity/entity'
import { FailGetIdentity } from '../../../store/state/identity/actions/types'
import { LogInReducer } from '../../../store/state/auth/reducers/types'

interface AuthPayload extends Identity{
  csrfToken: string
}

export interface LogInSuccessResponse {
  payload: AuthPayload
}

export type AuthResponse =  FailGetIdentity | LogInSuccessResponse 
 
export interface AuthProps extends AsyncReducer {
  authenticate: Function,
  authenticated: boolean
}

export interface AuthMapStateToProps {
  auth: LogInReducer
}


export type AuthState = {
  email: string,
  password: string,
  invalidEmail: boolean,
  invalidPassword: boolean, 
  invalidFormValid:boolean,
}
  