import { 
    requestTransactions,
    responseTransactions,
    failGetTransactions,
  } from './transactions';
  
  import { ACTIONS_ENUM_TYPES,
   } from './types';
  
  describe('Transactions Actions', ()=> {
    describe('requestTransactions should be a prure function', () => {
      it('should be a prure function', ()=> {
        expect(requestTransactions()).toEqual({
          type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS,
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
          type: ACTIONS_ENUM_TYPES.RECEIVE_TRANSACTIONS,
          payload
        })
      })
    })
    describe('failGetTransactions should be a prure function', () => {
      it('should be a prure function', () => {
        expect(failGetTransactions(401)).toEqual({
          type: ACTIONS_ENUM_TYPES.FAILED_TRANSACTIONS,
          errorCode: 401
        })
      })
    })
  })
