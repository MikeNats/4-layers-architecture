
import { TransactionItem } from '../../../domain/transaction/model'
import { SortingType } from '../../../domain/transaction/transactionService'
import { TransactionsReducer } from '../../../store/transactions/reducers/types'
import { AppContextType }  from '../../../context' 
import { AsyncReducer } from '../../../store/types'

export interface TransactionsProps extends AsyncReducer{
  transactions:TransactionItem[]
  fetchTransactions: Function,
  context: AppContextType, 
};

export type TransactionsLocalState = {
  short: SortingType | null,
  searchTerm: string
}
  
export type StateType = {
  transactions: TransactionsReducer
}  

