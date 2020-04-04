import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers'
const prodMiddlewates = [thunk]
const devMiddlewates  = [logger, thunk]

let middleware = 
  process.env.NODE_ENV === 'development' ? devMiddlewates : prodMiddlewates

export const store = createStore(rootReducer, applyMiddleware(...middleware))