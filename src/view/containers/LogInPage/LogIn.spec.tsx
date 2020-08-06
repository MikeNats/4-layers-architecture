import React from 'react'
import LogInForm from './LogIn'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import {
  Switch,
  HashRouter as Router
} from 'react-router-dom';
import fetch from '../../../service/fetch' 
import {AppContext, initialAppContext } from '../../../context'

jest.mock('../../service');

Enzyme.configure({ adapter: new Adapter() })

   
describe("LogInForm", () => {
  describe('component', () => {
    let component
    afterEach(() => {    
      jest.clearAllMocks();
    });
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
      fetch.mockImplementation(() => Promise.resolve({data: {csrfToken: "asdfasdf", userId:324234}})); 
      const tick = () => new Promise(resolve =>
        setTimeout(resolve, 600))

      const component = mount(<AppContext.Provider value={initialAppContext}>
        <Router><Switch><LogInForm /></Switch></Router></AppContext.Provider>)
      component.find('input').at(0).prop('onChange')({ currentTarget: { value: 'usekrname' },persist: ()=>{} })
      component.find('input').at(1).prop('onChange')({ currentTarget: { value: 'pakss' },persist: ()=>{} })
      component.find('button').simulate('click', {preventDefault: ()=>{}})
      await tick(); 
      component.update(); 
      
      expect(fetch).toBeCalled()
      expect(initialAppContext.authenticated).toBe(true) 
      expect(component.find(LogInForm).props().location.pathname).toEqual('/home') 
      component.unmount()
    });

    it('should not authenticate on submition when no value is provided', async () => {
      fetch.mockImplementation(() => Promise.resolve({data: {csrfToken: "asdfasdf", userId:324234}}));
      const tick = () => new Promise(resolve =>
        setTimeout(resolve, 600))
      initialAppContext.authenticated = false
      const component = mount(<AppContext.Provider value={initialAppContext}>
        <Router><Switch><LogInForm /></Switch></Router></AppContext.Provider>)
      component.find('input').at(0).prop('onChange')({ currentTarget: { value: '' },persist: ()=>{} })
      component.find('input').at(1).prop('onChange')({ currentTarget: { value: '' },persist: ()=>{} })
      component.find('button').simulate('click', {preventDefault: ()=>{}})
      await tick(); 
     
      component.update(); 
      expect(fetch).not.toBeCalled()
      expect(initialAppContext.authenticated).toBe(false) 
      component.unmount()
    });
  });
}); 
