import { combineReducers } from 'redux'
import { transactions } from "../components/trancations/reducers"

export const rootReducer = combineReducers({
    transactions: transactions
  });

