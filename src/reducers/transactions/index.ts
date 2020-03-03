import {
  ACTIONS_ENUM_TYPES,
  TransactionsActionTypes,
  TransactionPayLoadItemType
} from "../../actions/transactions/types";

export interface TransactionsStateType {
  payload: TransactionPayLoadItemType[]
  isFetching: Boolean, 
  didInvalidate: Boolean,
  errorCode: Number
} 

export const initialStoreState: TransactionsStateType =  {
  isFetching: false,
  didInvalidate: false,
  payload: [],
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
        payload: action.payload,
        errorCode: 0 
      }
    case ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS:
      return {
        ...state,
<<<<<<< HEAD
        isFetching: false,
        didInvalidate: true,
        errorCode: action.errorCode
=======
        transactions: {
          ...state.transactions,
          isFetching: false,
          didInvalidate: true,
          errorCode:  action.errorCode,
        }
>>>>>>> 5e8cfc2e07c5efa4abea76a44b9763139dafeeb1
      }
    default:
      return state
    }
  }