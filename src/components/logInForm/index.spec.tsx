import React from 'react'
import LogInForm from '.'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {
  Switch,
  HashRouter as Router
} from 'react-router-dom';
import { auth } from '../../services/auth'
import {AppContext, initialAppContext } from '../../context'

jest.mock('../../services/auth');

Enzyme.configure({ adapter: new Adapter() })

   
describe("LogInForm", () => {
  describe('component', () => {
    let component
    it('renders as expected', () => {
      component = shallow(<LogInForm /> );

      expect(component).toMatchSnapshot();
    });
    it('should render a form', () => {	
		  component = mount(<Router><LogInForm /></Router>).find('form')
 
      expect(component.length).toBe(1)
  	});
    it('should render three fieldsets', () => {	
      component = mount(<Router><LogInForm /></Router>).find('fieldset')
      
      expect(component.length).toBe(3)
    });
    it('should render two lebels', () => {	
      component = mount(<Router><LogInForm /></Router>).find('label')

      expect(component.length).toBe(2)
      expect(component.at(0).text()).toBe('user name:')
      expect(component.at(1).text()).toBe('password:')
    });
    it('should render two inputs', () => {	
      component = mount(<Router><LogInForm /></Router>).find('input')

      expect(component.length).toBe(2)
    });
    it('should render one button', () => {	
      component = mount(<Router><LogInForm /></Router>).find('button')

      expect(component.length).toBe(1) 
      expect(component.text()).toEqual('submit')
    });
    it('should authenticate on submition and redirect', async () => {
      auth.mockImplementation(() => Promise.resolve({userId: 'sdf'}));
      const tick = () => new Promise(resolve =>
        setTimeout(resolve, 0))

      component = mount(<AppContext.Provider value={initialAppContext}>
        <Router><Switch><LogInForm /></Switch></Router></AppContext.Provider>)
      component.find('input').at(0).simulate('change', { currentTargert: { value: 'username' } });
      component.find('input').at(1).simulate('change', { currentTargert: { value: 'pass' } });
      component.find('button').simulate('click')
      await tick();

      component.update();
      
      expect(auth).toBeCalled()
      expect(initialAppContext.authenticated).toBe(true) 
      expect(component.find(LogInForm).props().location.pathname).toEqual('/home') 
      component.unmount()
    });
  });
});
