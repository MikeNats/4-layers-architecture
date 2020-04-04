import { ActionsStatusType } from './types'
import { requestTransactions, responseTransactions, failGetTransactions } from '../components/trancations/actions'
export {  responseTransactions, requestTransactions } 


export const asyncActions: ActionsStatusType = {
    'TRANSACTIONS': {
      'REQUEST': requestTransactions,
      'SUCCESS': responseTransactions, 
      'FAIL': failGetTransactions
    }
  }
   