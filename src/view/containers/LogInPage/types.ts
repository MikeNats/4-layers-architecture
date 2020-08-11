import { AsyncReducer } from '../../../store/types'
import { Identity }  from '../../../domain/identity/model'
import { FailGetIdentity } from '../../../store/identity/actions/types'
import { AuthReducer } from '../../../store/auth/reducers/types'

interface AuthPayload extends Identity{
  csrfToken: string
}

export interface AuthSuccessResponse {
  payload: AuthPayload
}

export type AuthResponse =  FailGetIdentity | AuthSuccessResponse 
 
export interface LoginProps extends AsyncReducer {
  authenticate: Function,
  authenticated: boolean
}

export interface LogInMapStateToProps {
  auth: AuthReducer
}


export type LogInState = {
  email: string,
  password: string,
  errorEmail: boolean,
  errorPassword: boolean, 
  isFormValid:boolean,
  errorMessage: string
}
  