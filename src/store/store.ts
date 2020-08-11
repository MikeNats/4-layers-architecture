import logger from 'redux-logger';
import { combineReducers } from 'redux'
import { transactions } from './transactions/reducers/transactions'
import { identity } from './identity/reducers/identity'
import { logInReducer } from './auth/reducers/auth'
import { logInMiddleware } from './auth/middleware/logIn'


import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
const prodMiddlewates = [thunk, logInMiddleware]
const devMiddlewates  = [logger, thunk, logInMiddleware]

let middleware = 
  process.env.NODE_ENV === 'development' ? devMiddlewates : prodMiddlewates

const rootReducer = combineReducers({
  transactions: transactions,
  identity: identity,
  auth: logInReducer
});

export const store = createStore(rootReducer, applyMiddleware(...middleware))    
