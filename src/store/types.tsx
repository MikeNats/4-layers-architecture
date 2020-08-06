import { TransactionsReducer } from './transactions/reducers/types';

export interface AsyncReducer {
  isFetching: Boolean, 
  didInvalidate: Boolean, 
  errorCode: Number | null
} 

export type AsyncActions = {
  'REQUEST': Function,
  'SUCCESS': Function, 
  'FAIL': Function
}

export interface ApplicationState {
  transactions: TransactionsReducer
}