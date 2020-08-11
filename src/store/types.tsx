import { TransactionsReducer } from './transactions/reducers/types';
import { IdentityReducer } from './identity/reducers/types';

export interface AsyncReducer {
  isFetching: Boolean, 
  didInvalidate: Boolean, 
  errorCode: number | null
} 

export type AsyncActions = {
  'REQUEST': Function,
  'SUCCESS': Function, 
  'FAIL': Function
}

export type AsyncFailAction = {
  type: string
  errorCode: number
}

export interface ApplicationState {
  transactions: TransactionsReducer
  identity: IdentityReducer
  auth: boolean
}