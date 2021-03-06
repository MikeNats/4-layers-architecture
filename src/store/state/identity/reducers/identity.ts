import {
  IDENTITY_ACTION_TYPES,
  IdentityAsyncActions,
} from "../actions/types";
import { IdentityReducer } from './types';
import { createIdenity } from '../../../../domain/identity/identityServices'

export const initIdenitytReduerState: IdentityReducer =  {
  isFetching: false,
  didInvalidate: false,
  payload: createIdenity(),
  errorCode: 0  
}  
    
export const identity = (state: IdentityReducer = initIdenitytReduerState, action: IdentityAsyncActions): IdentityReducer  => {
  switch (action.type) {
    case IDENTITY_ACTION_TYPES.REQUEST_IDENTITY:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      }
    case IDENTITY_ACTION_TYPES.IDENTITY_SUCCESS:
      return {
        ...state,
        isFetching: false,  
        didInvalidate: false,
        payload:action.payload,
        errorCode: 0 
      }
    case IDENTITY_ACTION_TYPES.IDENTITY_FAIL:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
        errorCode: action.errorCode
      }
    default:
      return state
    }
  }