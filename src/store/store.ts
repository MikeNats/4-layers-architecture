import logger from 'redux-logger';
import { combineReducers } from 'redux'
import { transactions } from './transactions/reducers/transactions'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
const prodMiddlewates = [thunk]
const devMiddlewates  = [logger, thunk]

let middleware = 
  process.env.NODE_ENV === 'development' ? devMiddlewates : prodMiddlewates

const rootReducer = combineReducers({
  transactions: transactions
});

export const store = createStore(rootReducer, applyMiddleware(...middleware))    