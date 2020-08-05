import {
  TransactionItemType
} from "../../../models/transactions";

export interface TransactionsStateType {
  payload:TransactionItemType[]
  isFetching: Boolean, 
  didInvalidate: Boolean,
  errorCode: Number
} 

