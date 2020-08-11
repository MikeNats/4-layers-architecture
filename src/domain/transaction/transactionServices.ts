
import { TransactionItem } from './model'

export enum SORTING_METHODS{
  "A-Z" = "A-Z", 
  "Z-A" = "Z-A",
  "none" = "none"
}

export const shortTransactions = (value: SORTING_METHODS | null, transactions: Array<TransactionItem>) => {
  const sortingType = {
    "Z-A": (a:TransactionItem, b: TransactionItem) =>  a.product < b.product ? -1 : 1,
    "A-Z": (a:TransactionItem, b: TransactionItem) =>  a.product < b.product ? 1 : -1,
    "none": () =>  0
  } 
  return  transactions.sort((a, b) => sortingType[value || "none"](a,b))
}

export const searchAndSort = (short: SORTING_METHODS | null, searchTerm: string, transactions: Array<TransactionItem>): Array<TransactionItem> => 
  shortTransactions(short, searchTerm ? transactions.filter(item => 
    item.product.toLowerCase().includes(searchTerm)) : transactions)