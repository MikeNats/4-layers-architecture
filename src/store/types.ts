import { 
    TransactionsActionTypes,
    TransactionPayLoadType,
 } from '../actions/transactions/types'
import { ThunkMiddleware } from 'redux-thunk'

export type ActionsType = TransactionsActionTypes
export type StateType = {
  transactions:{
    payload: TransactionPayLoadType
    isFetching: Boolean,
    didInvalidate: Boolean,
    errorCode: Number
  }
}  
export type MiddlewareType = Array<ThunkMiddleware<StateType, ActionsType>> 