
import { TransactionItem } from '../../../domain/transaction/model'
import { SORTING_METHODS } from '../../../domain/transaction/transactionServices'
import { TransactionsReducer } from '../../../store/transactions/reducers/types'
import { AsyncReducer } from '../../../store/types'

export interface TransactionsProps extends AsyncReducer{
  transactions:TransactionItem[]
  requestTransactions: Function,
  requestIdentity: Function
};

export type TransactionsLocalState = {
  short: SORTING_METHODS | null,
  searchTerm: string
}
  
export type StateType = {
  transactions: TransactionsReducer
}  

