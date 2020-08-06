import { TransactionItem } from '../../../domain/transaction/model'
import {  
  RequestTransactions,
  ResponseTransactions,
  FailGetTransactions,
  TRANSACTIONS_ACTION_TYPES
} from './types'; 
import { AsyncActions }from '../../types'


export const transactionsActions: AsyncActions = {
  'REQUEST': (): RequestTransactions => ({
    type: TRANSACTIONS_ACTION_TYPES.REQUEST_TRANSACTIONS
  }),
  'SUCCESS': (payload:TransactionItem[]): ResponseTransactions => ({
    type: TRANSACTIONS_ACTION_TYPES.RECEIVED_TRANSACTIONS,
    payload
  }), 
  'FAIL': (errorCode: number): FailGetTransactions => ({
    type: TRANSACTIONS_ACTION_TYPES.FAILED_TRANSACTIONS,
    errorCode
  })
}