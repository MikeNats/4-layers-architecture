import { Action } from 'redux'
import { AUTH_ACTION_TYPE } from './types'
import { AsyncActions } from '../../types'
import { AsyncFailActions } from '../../types'

export const authActions: AsyncActions = {
  'REQUEST': (): Action => ({
    type: AUTH_ACTION_TYPE.REQUEST
  }),
  'SUCCESS': (): Action => ({
    type:  AUTH_ACTION_TYPE.SUCCESS,
  }), 
  'FAIL': (errorCode: number): AsyncFailActions => ({
    type: AUTH_ACTION_TYPE.FAIL,
    errorCode
  })
}
