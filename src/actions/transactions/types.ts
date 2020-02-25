export enum ACTIONS_ENUM_TYPES {
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
export type TransactionPayLoadType = Array<TransactionPayLoadItemType> 

export type RequestTransactionsActionType = {
  readonly type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS
  readonly index: number
}

export type ResponseTransactionsActionType = {
  readonly type: ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS
  readonly payload: TransactionPayLoadType | []
}

export type FailGetTransactionsActionType = {
  readonly type: ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS
  readonly errorCode: number
}
export type TransactionsActionTypes = 
  RequestTransactionsActionType |
  ResponseTransactionsActionType | 
  FailGetTransactionsActionType
