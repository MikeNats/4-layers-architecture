import { ActionsStatusType } from './types'
import { requestTransactions, responseTransactions, failGetTransactions } from './transactions/transactions'
export {  responseTransactions, requestTransactions } 


export const asyncActions: ActionsStatusType = {
  'TRANSACTIONS': {
    'REQUEST': requestTransactions,
    'SUCCESS': responseTransactions, 
    'FAIL': failGetTransactions
  }
}
   