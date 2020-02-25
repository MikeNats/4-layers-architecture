import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { transactions } from '../reducers'
import { MiddlewareType } from './types'


let middleware: MiddlewareType = 
  process.env.NODE_ENV === 'development' ? [logger] : [thunk]

export const store = createStore(transactions, applyMiddleware(...middleware))