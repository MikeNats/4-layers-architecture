import { LogInReducer } from './types'
import { AUTH_ACTION_TYPES, AuthAsyncActions} from '../actions/types'

export const initIdenitytReduerState: LogInReducer =  {
  isFetching: false,
  didInvalidate: false,
  authenticated: false,
  errorCode: null  
} 
    
export const logInReducer = (state: LogInReducer = initIdenitytReduerState, action: AuthAsyncActions): LogInReducer  => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOG_IN_REQUEST:
      return {
        errorCode: null,
        authenticated: false,
        isFetching: true,
        didInvalidate: false,
      }
    case AUTH_ACTION_TYPES.LOG_IN_SUCCESS:
      return {
        isFetching: false,  
        didInvalidate: false,
        authenticated: true,
        errorCode: null 
      }
    case AUTH_ACTION_TYPES.LOG_IN_FAIL:
      return {
        authenticated: false,
        isFetching: false,
        didInvalidate: true,
        errorCode: action.errorCode
      }
    default: 
      return state
    }
  }