
import axios from 'axios'
import fetch from './fetch'
const mockActions = {
    mockAction:  {
        'REQUEST': jest.fn().mockResolvedValue({}),
        'SUCCESS': jest.fn().mockResolvedValue({}),
        'FAIL': jest.fn().mockResolvedValue({})
    }
}

jest.mock('axios');
  describe('Fetch', ()=> {
    describe('Actions functionality', () => {
      it('should invoke REQUEST & SUCCESS actions on success', () => {
        const mock = {
            dispatch:jest.fn() 
          }
        axios.mockResolvedValue(Promise.resolve({data: []})) 

        fetch({ url: '/', method: 'get'}, {
            asyncActionNames: mockActions.mockAction
        })(mock.dispatch).then(() => {
          expect(mock.dispatch).toBeCalled();
          expect(mockActions.mockAction.REQUEST).toBeCalled();
          expect(mockActions.mockAction.SUCCESS).toBeCalled()
        })
      })
      it('should invoke REQUEST & FAIL actions on fail', () => {
        const mock = {
            dispatch:jest.fn() 
          }
        axios.mockResolvedValue(Promise.reject({errorCode: 500}))    

        fetch({ url: '/', method: 'get'}, {
            asyncActionNames: mockActions.mockAction
        })(mock.dispatch).then(() => {
          expect(mock.dispatch).toBeCalled();
          expect(mockActions.mockAction.REQUEST).toBeCalled();
          expect(mockActions.mockAction.FAIL).toBeCalled()
        })
      })
    }) 
    describe('Promise functionality', () => { 
      it('should invoke axios', () => {

        axios.mockResolvedValue(Promise.resolve({data: []})) 

        fetch({ url: '/', method: 'get'}).then(() => {
          expect(axios).toBeCalled();
        })
      })

    })
  })
 