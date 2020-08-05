import {
  ACTIONS_ENUM_TYPES,
  TransactionsActionTypes,
} from "../../actions/transactions/types";
import { TransactionsStateType } from './types';

export const initialStoreState: TransactionsStateType =  {
  isFetching: false,
  didInvalidate: false,
  payload:[],//null
  errorCode: 0  
}

export const transactions = (state: TransactionsStateType = initialStoreState, action: TransactionsActionTypes): TransactionsStateType  => {
  switch (action.type) {
    case ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      }
    case ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS:
      return {
        ...state,
        isFetching: false,  
        didInvalidate: false,
        payload:action.payload,
        errorCode: 0 
      }
    case ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS:
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