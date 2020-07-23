
import { TransactionItemType } from '../../store/actions/transactions/types'
import { SortingType } from './types'

export const shortTransactions = (value: SortingType | null, transactions: Array<TransactionItemType>) => {
  const sortingType = {
    "Z-A": (a:TransactionItemType, b: TransactionItemType) =>  a.product < b.product ? -1 : 1,
    "A-Z": (a:TransactionItemType, b: TransactionItemType) =>  a.product < b.product ? 1 : -1,
    "none": () =>  0
  } 
  return  transactions.sort((a, b) => sortingType[value || "none"](a,b))
 }