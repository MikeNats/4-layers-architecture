import { combineReducers } from 'redux'
import { transactions } from "./transactions/transations"

export const rootReducer = combineReducers({
    transactions: transactions
  });

