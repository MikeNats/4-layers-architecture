import {
  ACTIONS_ENUM_TYPES,
  TransactionsActionTypes,
  TransactionPayloadItemType
} from "../actions/types";

export interface TransactionsStateType {
  payload:TransactionPayloadItemType[]
  isFetching: Boolean, 
  didInvalidate: Boolean,
  errorCode: Number
} 

export const initialStoreState: TransactionsStateType =  {
  isFetching: false,
  didInvalidate: false,
  payload:[],
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