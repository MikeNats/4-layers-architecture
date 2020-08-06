import {
  TRANSACTIONS_ACTION_TYPES,
  TransactionsAsyncActions,
} from "../actions/types";
import { TransactionsReducer } from './types';

export const initTransactionsReduerState: TransactionsReducer =  {
  isFetching: false,
  didInvalidate: false,
  payload:[],
  errorCode: null
} 
    
export const transactions = (state: TransactionsReducer = initTransactionsReduerState, action: TransactionsAsyncActions): TransactionsReducer  => {
  switch (action.type) {
    case TRANSACTIONS_ACTION_TYPES.REQUEST_TRANSACTIONS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      }
    case TRANSACTIONS_ACTION_TYPES.RECEIVED_TRANSACTIONS:
      return {
        ...state,
        isFetching: false,  
        didInvalidate: false,
        payload:action.payload,
        errorCode: 0 
      }
    case TRANSACTIONS_ACTION_TYPES.FAILED_TRANSACTIONS:
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