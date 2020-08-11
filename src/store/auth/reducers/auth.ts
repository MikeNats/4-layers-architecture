import { AuthReducer } from './types'
import { AUTH_ACTION_TYPE, AuthAsyncActions} from '../actions/types'

export const initIdenitytReduerState: AuthReducer =  {
  isFetching: false,
  didInvalidate: false,
  authenticated: false,
  errorCode: null  
} 
    
export const authReducer = (state: AuthReducer = initIdenitytReduerState, action: AuthAsyncActions): AuthReducer  => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.REQUEST:
      return {
        errorCode: null,
        authenticated: false,
        isFetching: true,
        didInvalidate: false,
      }
    case AUTH_ACTION_TYPE.SUCCESS:
      return {
        isFetching: false,  
        didInvalidate: false,
        authenticated: true,
        errorCode: null 
      }
    case AUTH_ACTION_TYPE.FAIL:
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