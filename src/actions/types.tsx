import { TransactionsActionTypes } from '../components/trancations/actions/types'
import {AsynActionsState} from '../services/types'
export type ActionsStatusType = {
  [type: string]: AsynActionsState
}

export enum AsyncActionNames {
  TRANSACTIONS = 'TRANSACTIONS'
}

export type ActionsType = TransactionsActionTypes;