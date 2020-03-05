import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers'

let middleware = 
  process.env.NODE_ENV === 'development' ? [logger, thunk] : [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware))