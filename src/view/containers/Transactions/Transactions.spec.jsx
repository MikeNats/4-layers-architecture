import React from 'react'
import Transactions from '../../view/components/trancations/index'
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import configureStore from 'redux-mock-store';
import TransactionSearchForm  from '../../view/components/Transactions/TransactionsSearchList/TransactionsSearchForm'
import fetch from '../../../service/fetch'
jest.mock('../../services');

Enzyme.configure({ adapter: new Adapter() })

const middlewares = [thunk], 
 	mockStore = configureStore(middlewares);
 
   
  const initializedStored  = mockStore({ transactions: {
    payload:[{ 
      date: '2020-04-23T14:40:55.275Z',
      amount: 12312,
      product: 'string',
      image: 'string'}],
    isFetching: false,
    didInvalidate: false,
    errorCode: 0}
  })
describe("Transactions", () => {
    fetch.mockImplementation(() => () => {});
    it('should invoke fetchtransactions on componentDidMount', () => {	
      const component = shallow(<Transactions  store={initializedStored} />);
      expect(component).toMatchSnapshot();
    });
    it('should invoke fetchtransactions on componentDidMount', () => {	
      const component = mount(<Transactions  store={initializedStored} />).find(TransactionSearchForm);
      expect(component.length).toEqual(1);
    });
    it('should should render TransactionSearchForm if props are initiazined', () => {	
      fetch.mockImplementation(() => () => {});

		  mount(<Transactions  store={initializedStored} />).find(TransactionSearchForm);
      expect(fetch).toHaveBeenCalled()
  	});
});
