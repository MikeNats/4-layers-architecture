import { 
    requestTransactions,
    responseTransactions,
    failGetTransactions,
  } from './transactions';
  
  import { TRANSACTIONS_ACTION_TYPES,
   } from './types';
  
  describe('Transactions Actions', ()=> {
    describe('requestTransactions should be a prure function', () => {
      it('should be a prure function', ()=> {
        expect(requestTransactions()).toEqual({
          type: TRANSACTIONS_ACTION_TYPES.REQUEST_TRANSACTIONS,
        })
      })
    })
    describe('responseTransactions should be a prure function', () => {
      it('should be a prure function', ()=> {
        const payload = [{ 
          date: 43565,
          amount: 23456,
          product: 'name',
          image: 'image'
        }]
        expect(responseTransactions(payload)).toEqual({
          type: TRANSACTIONS_ACTION_TYPES.RECEIVED_TRANSACTIONS,
          payload
        })
      })
    })
    describe('failGetTransactions should be a prure function', () => {
      it('should be a prure function', () => {
        expect(failGetTransactions(401)).toEqual({
          type: TRANSACTIONS_ACTION_TYPES.FAILED_TRANSACTIONS,
          errorCode: 401
        })
      })
    })
  })
