import { Action } from 'redux';

export enum AUTH_ACTION_TYPE {
  REQUEST = 'AUTH_REQUEST',
  SUCCESS = 'AUTH_SUCCESS',
  FAIL ='AUTH_FAIL'
}

export interface AuthRequest extends Action {
  type: AUTH_ACTION_TYPE.REQUEST,
}

export interface AuthSuccess extends Action {
  type: AUTH_ACTION_TYPE.SUCCESS,
}

export interface AuthFail extends Action {
  type: AUTH_ACTION_TYPE.FAIL,
  errorCode: number
}


export type AuthAsyncActions = AuthRequest | AuthSuccess | AuthFail