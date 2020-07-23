import { TransactionsActionTypes } from './transactions/types'
import {AsynActionsState} from '../../service/types'
export type ActionsStatusType = {
  [type: string]: AsynActionsState
}

export enum AsyncActionNames {
  TRANSACTIONS = 'TRANSACTIONS'
}

export type ActionsType = TransactionsActionTypes;