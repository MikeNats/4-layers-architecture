import { Action } from 'redux'
import { AUTH_ACTION_TYPES } from './types'
import { AsyncActions } from '../../types'
import { AsyncFailAction } from '../../types'

export const logInActions: AsyncActions = {
  'REQUEST': (): Action => ({
    type: AUTH_ACTION_TYPES.LOG_IN_REQUEST
  }),
  'SUCCESS': (): Action => ({
    type:  AUTH_ACTION_TYPES.LOG_IN_SUCCESS,
  }), 
  'FAIL': (errorCode: number): AsyncFailAction => ({
    type: AUTH_ACTION_TYPES.LOG_IN_FAIL,
    errorCode
  })
}
