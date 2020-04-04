import React from 'react'
import Home from '.'
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';


Enzyme.configure({ adapter: new Adapter() })

describe("Home", () => {
  describe('component', () => {
    let component
    it('renders as expected', () => {

      component = shallow(<Home className="test" /> );
      expect(component).toMatchSnapshot();
   });
   it('should set to props', () => {	
		  component = shallow(<Home className="test" />).find('main');

     expect(component.props()).toHaveProperty('className');
     expect(component.prop("className")).toEqual('base-layout test');
  	});
  });
});
