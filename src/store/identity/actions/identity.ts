import { Identity } from '../../../domain/identity/model'
import {  
  RequestIdentity,
  ResponseIdentity,
  FailGetIdentity,
  IDENTITY_ACTION_TYPES
} from './types'; 
import { AsyncActions }from '../../types'


export const identityActions: AsyncActions = {
  'REQUEST': (): RequestIdentity => ({
    type: IDENTITY_ACTION_TYPES.REQUEST_IDENTITY
  }),
  'SUCCESS': (payload:Identity): ResponseIdentity => ({
    type: IDENTITY_ACTION_TYPES.RECEIVED_IDENTITY,
    payload
  }), 
  'FAIL': (errorCode: number): FailGetIdentity => ({
    type: IDENTITY_ACTION_TYPES.FAILED_IDENTITY,
    errorCode
  })
}