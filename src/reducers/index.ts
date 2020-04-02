import { combineReducers } from 'redux'
import { transactions } from "../services/transactions/reducers"

export const rootReducer = combineReducers({
    transactions: transactions
  });

