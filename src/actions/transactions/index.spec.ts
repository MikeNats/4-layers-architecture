import { 
    requestTransactions,
    responseTransactions,
    failGetTransactions,
    fetchtransactions,
  } from './index';
  import axios from 'axios'
  
  import { ACTIONS_ENUM_TYPES,
   } from './types';
  
  describe('Transactions Actions', ()=> {
    describe('requestTransactions should be a prure function', () => {
      it('should be a prure function', ()=> {
        expect(requestTransactions(5)).toEqual({
          type: ACTIONS_ENUM_TYPES.REQUEST_TRANSACTIONS,
          index: 5
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
    describe('failGetTransactions should be a prure function', () => {
      it('should invoke requestTransactions', () => {
        const mock = {
          dispatch:jest.fn()
        }
     
        axios.get = jest.fn().mockResolvedValue({});
  
        fetchtransactions(1)(mock.dispatch)
        expect(mock.dispatch).toHaveBeenCalledWith(requestTransactions(1));
      })
      it('should invoke responseTransactions if call resolve', () => {
        const mock = {
          dispatch:jest.fn()
        }
        const response = {
          data: {
            payload: [{
              date: 43565,
              amount: 23456,
              product: 'name',
              image: 'image'
            }]
          }
        }
     
        axios.get = jest.fn().mockResolvedValue(response);
        fetchtransactions(1)(mock.dispatch).then((res: typeof response) => {
          expect(res.data).toEqual(response.data);
        }) 
      })
    })
  })