import { Action } from 'redux'
export enum ACTIONS_ENUM_TYPES{
  REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS',
  RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS',
  FAILED_TRANSACTIONS = 'FAILED_TRANSACTIONS'
}

export type TransactionPayLoadItemType = {
  readonly date: number;
  readonly amount: number;
  readonly product: string;
  readonly image: string
}

export interface requestTransactionsActionType extends Action{
  type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS,
  index: number
}

export interface responseTransactionsActionsType extends Action{
  type: ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS,
  payload: TransactionPayLoadItemType[]
}

export interface failGetTransactionsActionType extends Action{
  type: ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS,
  errorCode: number
}


export type TransactionsActionTypes = requestTransactionsActionType | responseTransactionsActionsType | failGetTransactionsActionType
