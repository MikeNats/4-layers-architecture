import React from 'react'
import Transactions from './index'
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import configureStore from 'redux-mock-store';
import TransactionSearchList  from '../transactionsSearchList'
import { fetchtransactions } from '../../services/transactions/actions'
jest.mock('../../services/transactions/actions');

Enzyme.configure({ adapter: new Adapter() })

const initialState = { transactions: {
  payload:[],
  isFetching: false,
  didInvalidate: false,
  errorCode: 0,}
}
const middlewares = [thunk], 
 	mockStore = configureStore(middlewares),
   store = mockStore(initialState);
 
   
  const initializedStored  = mockStore({ transactions: {
    payload:[{ 
      date: '2020-04-23T14:40:55.275Z',
      amount: 12312,
      product: 'string',
      image: 'string'}],
    isFetching: false,
    didInvalidate: false,
    errorCode: 0,}
  })
describe("Transactions", () => {
  describe('component', () => {
    fetchtransactions.mockImplementation(() => () => {});
    it('should invoke fetchtransactions on componentDidMount', () => {	
      const component = shallow(<Transactions store={initializedStored} />);
      expect(component).toMatchSnapshot();
    });
    it('should invoke fetchtransactions on componentDidMount', () => {	
      const component = mount(<Transactions store={initializedStored} />).find(TransactionSearchList);
      expect(component.length).toEqual(1);
    });
    it('should should render TransactionSearchList if props are initiazined', () => {	
      fetchtransactions.mockImplementation(() => () => {});

		  mount(<Transactions store={initializedStored} />).find(TransactionSearchList);
      expect(fetchtransactions).toHaveBeenCalled()
  	});

  });
});
