import logger from 'redux-logger';
import { combineReducers } from 'redux'
import { transactions } from './state/transactions/reducers/transactions'
import { identity } from './state/identity/reducers/identity'
import { logInReducer } from './state/auth/reducers/auth'
import { themeMiddleware } from './state/theme/middleware/theme'
import { themeReducer } from './state/theme/reducers/theme'


import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
const prodMiddlewates = [thunk, themeMiddleware]
const devMiddlewates  = [logger, thunk, themeMiddleware]

let middleware = 
  process.env.NODE_ENV === 'development' ? devMiddlewates : prodMiddlewates

const rootReducer = combineReducers({
  transactions: transactions,
  identity: identity,
  auth: logInReducer,
  theme: themeReducer
});

export const store = createStore(rootReducer, applyMiddleware(...middleware))    
 