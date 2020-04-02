import React from 'react'
import LogInFormPage from '.'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

jest.mock('../../services/transactions/actions');

Enzyme.configure({ adapter: new Adapter() })

describe("LogInFormPage", () => {
  describe('component', () => {
    let component
    it('renders as expected', () => {

      component = shallow(<LogInFormPage /> );
      expect(component).toMatchSnapshot();
   });
   it('should set to props', () => {	
		  component = shallow(<LogInFormPage />).find('main');

     expect(component.props()).toHaveProperty('className');
     expect(component.prop("className")).toEqual('base-layout horiz-vertic-align-layout');
    });
  });
});
 
