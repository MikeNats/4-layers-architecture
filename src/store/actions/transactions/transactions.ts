import { 
  TransactionItemType, 
  RequestTransactionsActionType,
  ResponseTransactionsActionsType,
  FailGetTransactionsActionType,
  ACTIONS_ENUM_TYPES
} from './types'; 

export const requestTransactions = (): RequestTransactionsActionType => ({
  type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS
})

export const responseTransactions = (payload:TransactionItemType[]): ResponseTransactionsActionsType => ({
  type: ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS,
  payload
})

export const failGetTransactions = (errorCode: number): FailGetTransactionsActionType => ({
  type: ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS,
  errorCode
})