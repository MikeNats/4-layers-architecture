
import { TransactionItemType } from '../../models/transactions'
import { TransactionsStateType } from '../../store/reducers/transactions/types'
import { AppContextType }  from '../../context' 

export enum SortingType{
  "A-Z" = "A-Z",
  "Z-A" = "Z-A",
  "none" = "none"
}

export interface TransactionsProps {
  transactions:TransactionItemType[]
  isFetching: Boolean,
  didInvalidate: Boolean,
  errorCode: Number,
  getTransactions: Function,
  context: AppContextType,
};
  
export type StateType = {
  transactions: TransactionsStateType
}  

export type TransactionsLocalState = {
  short: SortingType | null,
  searchTerm: string
}