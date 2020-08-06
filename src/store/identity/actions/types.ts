import { Action } from 'redux'
import { Identity } from '../../../domain/identity/model'

 
export enum IDENTITY_ACTION_TYPES {
  REQUEST_IDENTITY= 'REQUEST_IDENTITY',
  RECEIVED_IDENTITY= 'RECEIVED_IDENTITY',
  FAILED_IDENTITY= 'FAILED_IDENTITY'
}

export interface RequestIdentity extends Action {
  type: IDENTITY_ACTION_TYPES.REQUEST_IDENTITY,
}

export interface ResponseIdentity extends Action {
  type: IDENTITY_ACTION_TYPES.RECEIVED_IDENTITY,
  payload:Identity
}

export interface FailGetIdentity extends Action {
  type: IDENTITY_ACTION_TYPES.FAILED_IDENTITY,
  errorCode: number
}


export type IdentityAsyncActions = RequestIdentity | ResponseIdentity | FailGetIdentity
