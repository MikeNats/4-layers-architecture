
import { TransactionPayloadItemType } from './actions/types'
import { AppContextType }  from '../../context'

export interface HomePropsType {
  payload:TransactionPayloadItemType[]
  isFetching: Boolean,
  didInvalidate: Boolean,
  errorCode: Number,
  getTransactions: Function,
  context: AppContextType,
};
  
export  type StateType = {
  transactions: {
    payload:TransactionPayloadItemType[]
    isFetching: Boolean,
    didInvalidate: Boolean,
    errorCode: number
  }
} 