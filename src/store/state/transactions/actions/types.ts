import { Action } from 'redux'
import { TransactionItem } from '../../../../domain/transaction/entity'

 
export enum TRANSACTIONS_ACTION_TYPES {
  REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS',
  RECEIVED_TRANSACTIONS = 'RECEIVED_TRANSACTIONS',
  FAILED_TRANSACTIONS = 'FAILED_TRANSACTIONS'
}

export interface RequestTransactions extends Action {
  type: TRANSACTIONS_ACTION_TYPES.REQUEST_TRANSACTIONS,
}

export interface ResponseTransactions extends Action {
  type: TRANSACTIONS_ACTION_TYPES.RECEIVED_TRANSACTIONS,
  payload:TransactionItem[]
}

export interface FailGetTransactions extends Action {
  type: TRANSACTIONS_ACTION_TYPES.FAILED_TRANSACTIONS,
  errorCode: number
}


export type TransactionsAsyncActions = RequestTransactions | ResponseTransactions | FailGetTransactions
