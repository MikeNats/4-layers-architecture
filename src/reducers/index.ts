import { combineReducers } from 'redux'
import { transactions } from "./transactions"

export const rootReducer = combineReducers({
    transactions: transactions
  });

