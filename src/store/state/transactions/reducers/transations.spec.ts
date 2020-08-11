import { 
    transactions
  } from './transactions';
  import {
    TRANSACTIONS_ACTION_TYPES,
    TransactionsAsyncActions
  } from '../../../actions/transactions/types';
  const initialState = {
    isFetching: false,
    didInvalidate: false,
    payload:[],
    errorCode: 0
  }
  
  describe('Transactions Reducer', ()=> {
      it('should update isFetching attr if REQUEST_TRANSACTIONS', ()=> {
        const action: TransactionsAsyncActions = {
          type: TRANSACTIONS_ACTION_TYPES.REQUEST_TRANSACTIONS,
        }
  
        expect(transactions(initialState, action)).toEqual({
          isFetching: true,
          didInvalidate: false,
          payload:[],
          errorCode: 0
        })
      })
      it('should update payload:attr if RECEIVED_TRANSACTIONS', ()=> {
        const action: TransactionsAsyncActions = {
          type: TRANSACTIONS_ACTION_TYPES.RECEIVED_TRANSACTIONS,
          payload:[{  
            date: '124234',
            amount: 234234,
            product: 'erfwerqe',
            image:'asdasd'
          }]
        } 
  
        expect(transactions(initialState, action)).toEqual({
            isFetching: false,
            didInvalidate: false,
            payload:[{  
              date: '124234',
              amount: 234234,
              product: 'erfwerqe',
              image:'asdasd'
            }],
            errorCode: 0
          })
      })
      it('should update didInvalidate and errorCode attr if FAILED_TRANSACTIONS', ()=> {
        const action: TransactionsAsyncActions = {
          type: TRANSACTIONS_ACTION_TYPES.FAILED_TRANSACTIONS,
          errorCode: 401
        }
  
        expect(transactions(initialState, action)).toEqual({
          isFetching: false,
          didInvalidate: true,
          payload:[],
          errorCode: 401
        })
      })
  })
