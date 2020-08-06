import {
  TransactionItem
} from "../../../domain/transaction/model";
import { AsyncReducer } from '../../types'

export interface TransactionsReducer extends AsyncReducer{
  payload:TransactionItem[]
} 

