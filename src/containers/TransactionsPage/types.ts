
import { TransactionItemType } from '../../store/actions/transactions/types'
import { AppContextType }  from '../../context' 

export enum SortingType{
  "A-Z" = "A-Z",
  "Z-A" = "Z-A",
  "none" = "none"
}

export interface HomePropsType {
  transactions:TransactionItemType[]
  isFetching: Boolean,
  didInvalidate: Boolean,
  errorCode: Number,
  getTransactions: Function,
  context: AppContextType,
};
  
export type StateType = {
  transactions: {
    payload:TransactionItemType[]
    isFetching: Boolean,
    didInvalidate: Boolean, 
    errorCode: number
  }
}  

export type HomeState = {
  short: SortingType | null,
  searchTerm: string
}