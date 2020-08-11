import {
  TransactionItem
} from "../../../../domain/transaction/entity";
import { AsyncReducer } from '../../../types'

export interface TransactionsReducer extends AsyncReducer{
  payload:TransactionItem[]
} 

