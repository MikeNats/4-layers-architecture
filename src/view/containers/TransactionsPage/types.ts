
import { TransactionItem } from '../../../domain/transaction/model'
import { SortingType } from '../../../domain/transaction/transactionService'
import { TransactionsReducer } from '../../../store/transactions/reducers/types'
import { AsyncReducer } from '../../../store/types'

export interface TransactionsProps extends AsyncReducer{
  transactions:TransactionItem[]
  fetchTransactions: Function,
  fetchIdentity: Function
};

export type TransactionsLocalState = {
  short: SortingType | null,
  searchTerm: string
}
  
export type StateType = {
  transactions: TransactionsReducer
}  

