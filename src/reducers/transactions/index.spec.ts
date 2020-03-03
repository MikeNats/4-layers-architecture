import { 
<<<<<<< HEAD
    transactions
  } from './index';
  import {
    ACTIONS_ENUM_TYPES,
    TransactionsActionTypes
  } from '../../actions/transactions/types';
  const initialState = {
    isFetching: false,
    didInvalidate: false,
    payload: [],
    errorCode: 0
  }
  
  describe('Transactions Reducer', ()=> {
      it('should update isFetching attr if REQUEST_TRANSACTIONS', ()=> {
        const action: TransactionsActionTypes = {
          type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS,
          index: 5
        }
  
        expect(transactions(initialState, action)).toEqual({
          isFetching: true,
          didInvalidate: false,
          payload: [],
          errorCode: 0
        })
      })
      it('should update payload attr if RECEIVE_TRANSACTIONS', ()=> {
        const action: TransactionsActionTypes = {
          type: ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS,
=======
  transactions
} from './index';
import {
  ACTIONS_ENUM_TYPES,
  TransactionsActionTypes
} from '../../actions/transactions/types';
const initialState = {
  transactions: {
    isFetching: false,
    didInvalidate: false,
    payload: [],
    errorCode: undefined
  }
}

describe('Transactions Reducer', ()=> {
    it('should update isFetching attr if REQUEST_TRANSACTIONS', ()=> {
      const action: TransactionsActionTypes = {
        type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS,
        index: 5
      }

      expect(transactions(initialState, action)).toEqual({
        transactions: {
          isFetching: true,
          didInvalidate: false,
          payload: [],
          errorCode: undefined
        }})
    })
    it('should update payload attr if RECEIVE_TRANSACTIONS', ()=> {
      const action: TransactionsActionTypes = {
        type: ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS,
        payload: [{  
          date: 124234,
          amount: 234234,
          product: 'erfwerqe',
          image:'asdasd'
        }]
      }

      expect(transactions(initialState, action)).toEqual({
        transactions: {
          isFetching: false,
          didInvalidate: false,
>>>>>>> 5e8cfc2e07c5efa4abea76a44b9763139dafeeb1
          payload: [{  
            date: 124234,
            amount: 234234,
            product: 'erfwerqe',
            image:'asdasd'
<<<<<<< HEAD
          }]
        }
  
        expect(transactions(initialState, action)).toEqual({
            isFetching: false,
            didInvalidate: false,
            payload: [{  
              date: 124234,
              amount: 234234,
              product: 'erfwerqe',
              image:'asdasd'
            }],
            errorCode: 0
          })
      })
      it('should update didInvalidate and errorCode attr if FAILED_TRANSACTIONS', ()=> {
        const action: TransactionsActionTypes = {
          type: ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS,
          errorCode: 401
        }
  
        expect(transactions(initialState, action)).toEqual({
=======
          }],
          errorCode: undefined
        }})
    })
    it('should update didInvalidate and errorCode attr if FAILED_TRANSACTIONS', ()=> {
      const action: TransactionsActionTypes = {
        type: ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS,
        errorCode: 401
      }

      expect(transactions(initialState, action)).toEqual({
        transactions: {
>>>>>>> 5e8cfc2e07c5efa4abea76a44b9763139dafeeb1
          isFetching: false,
          didInvalidate: true,
          payload: [],
          errorCode: 401
<<<<<<< HEAD
        })
      })
  })
=======
        }})
    })
})
>>>>>>> 5e8cfc2e07c5efa4abea76a44b9763139dafeeb1
