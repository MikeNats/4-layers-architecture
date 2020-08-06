
import { TransactionItem } from './model'

export enum SortingType{
  "A-Z" = "A-Z", 
  "Z-A" = "Z-A",
  "none" = "none"
}

export const shortTransactions = (value: SortingType | null, transactions: Array<TransactionItem>) => {
  const sortingType = {
    "Z-A": (a:TransactionItem, b: TransactionItem) =>  a.product < b.product ? -1 : 1,
    "A-Z": (a:TransactionItem, b: TransactionItem) =>  a.product < b.product ? 1 : -1,
    "none": () =>  0
  } 
  return  transactions.sort((a, b) => sortingType[value || "none"](a,b))
}