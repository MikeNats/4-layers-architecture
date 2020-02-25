
import {
    TransactionPayLoadType,
} from "../../actions/transactions/types";

export type TransactionsIitialStateType = {
  transactions: {
    readonly isFetching: boolean
    readonly didInvalidate: boolean
    readonly payload: TransactionPayLoadType | [],
    readonly errorCode?: number
  }
}