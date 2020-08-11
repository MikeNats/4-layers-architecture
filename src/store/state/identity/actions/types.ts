import { Action } from 'redux'
import { Identity } from '../../../../domain/identity/entity'

 
export enum IDENTITY_ACTION_TYPES {
  REQUEST_IDENTITY= 'REQUEST_IDENTITY',
  IDENTITY_SUCCESS= 'IDENTITY_SUCCESS',
  IDENTITY_FAIL= 'IDENTITY_FAIL'
}

export interface RequestIdentity extends Action {
  type: IDENTITY_ACTION_TYPES.REQUEST_IDENTITY,
}

export interface ResponseIdentity extends Action {
  type: IDENTITY_ACTION_TYPES.IDENTITY_SUCCESS,
  payload:Identity
}

export interface FailGetIdentity extends Action {
  type: IDENTITY_ACTION_TYPES.IDENTITY_FAIL,
  errorCode: number
}


export type IdentityAsyncActions = RequestIdentity | ResponseIdentity | FailGetIdentity
