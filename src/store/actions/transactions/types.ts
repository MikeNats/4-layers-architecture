import { Action } from 'redux'
import { TransactionItemType } from '../../../models/transactions'
export enum ACTIONS_ENUM_TYPES{
  REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS',
  RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS',
  FAILED_TRANSACTIONS = 'FAILED_TRANSACTIONS'
}

export interface RequestTransactionsActionType extends Action{
  type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS,
}

export interface ResponseTransactionsActionsType extends Action{
  type: ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS,
  payload:TransactionItemType[]
}

export interface FailGetTransactionsActionType extends Action{
  type: ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS,
  errorCode: number
}


export type TransactionsActionTypes = RequestTransactionsActionType | ResponseTransactionsActionsType | FailGetTransactionsActionType
