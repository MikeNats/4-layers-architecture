import {
  ACTIONS_ENUM_TYPES,
  TransactionsActionTypes,
} from "../../actions/transactions/types";
import { TransactionsIitialStateType } from './types'

export const initialState: TransactionsIitialStateType = {
  transactions: {
    isFetching: false,
    didInvalidate: false,
    payload: [],
    errorCode: undefined
  }
}

export const transactions = (state: TransactionsIitialStateType = initialState, action: TransactionsActionTypes): TransactionsIitialStateType  => {
  switch (action.type) {
    case ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          isFetching: true,
          didInvalidate: false,
          errorCode: undefined
        }
      }
    case ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS:
      return {
        ...state,
        transactions: {
          isFetching: false,  
          didInvalidate: false,
          errorCode: undefined,
          payload: action.payload,
        }
      }
    case ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          isFetching: false,
          didInvalidate: false,
          errorCode:  action.errorCode,
        }
      }
    default:
      return state
    }
  }