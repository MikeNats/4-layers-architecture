import React from 'react'
import Home from './Home'
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import configureStore from 'redux-mock-store';
import { fetchtransactions } from '../../services/transactions/actions'
jest.mock('../../services/transactions/actions');

Enzyme.configure({ adapter: new Adapter() })

const initialState = { 
  payload:[],
  isFetching: false,
  didInvalidate: false,
  errorCode: 0,
}
const middlewares = [thunk], 
 	mockStore = configureStore(middlewares),
   store = mockStore(initialState);
   
describe("Home", () => {
  describe('component', () => {
    let component
    it('renders as expected', () => {

      component = shallow(<Home store={store} /> );
      expect(component).toMatchSnapshot();
   });
   it('should connect `payload` to props', () => {	
		  component = shallow(<Home store={store} />).find('Home');

     expect(component.props()).toHaveProperty('payload');
  	 expect(component.props().payload).toEqual(initialState.payload);
  	});

  	it('should connect `isFetching` to props', () => {	
		  component = shallow(<Home store={store} />).find('Home');

  		expect(component.props()).toHaveProperty('isFetching');
  		expect(component.props().isFetching).toEqual(initialState.isFetching);
    });
    
    it('should connect `didInvalidate` to props', () => {	
      component = shallow(<Home store={store} />).find('Home'); 

      expect(component.props()).toHaveProperty('didInvalidate');
      expect(component.props().didInvalidate).toEqual(initialState.didInvalidate);
    });

    it('should connect `errorCode` to props', () => {	
      component = shallow(<Home store={store} />).find('Home');
  
      expect(component.props()).toHaveProperty('errorCode');
      expect(component.props().errorCode).toEqual(initialState.errorCode);
    });

    it('should connect `fetchtransactions` to props', () => {	
      fetchtransactions.mockImplementation(() => () => {});

      component = mount(<Home store={store} />).find('Home');
      expect(fetchtransactions).toHaveBeenCalled()
    });
  });
});
