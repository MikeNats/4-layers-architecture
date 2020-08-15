
import { TransactionItem } from '../../../domain/transaction/entity'
import { SORTING_METHODS } from '../../../domain/transaction/transactionServices'
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