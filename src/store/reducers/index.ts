import { combineReducers } from 'redux'
import { transactions } from "./transactions/transactions"

export const rootReducer = combineReducers({
    transactions: transactions
  });

