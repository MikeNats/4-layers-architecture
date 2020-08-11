import { Action } from 'redux';

export enum AUTH_ACTION_TYPES {
  LOG_IN_REQUEST = 'LOG_IN_REQUEST',
  LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
  LOG_IN_FAIL ='LOG_IN_FAIL'
}

export interface LogInRequest extends Action {
  type: AUTH_ACTION_TYPES.LOG_IN_REQUEST,
}

export interface LogInSuccess extends Action {
  type: AUTH_ACTION_TYPES.LOG_IN_SUCCESS,
}

export interface LogInFail extends Action {
  type: AUTH_ACTION_TYPES.LOG_IN_FAIL,
  errorCode: number
}


export type AuthAsyncActions = LogInRequest | LogInSuccess | LogInFail