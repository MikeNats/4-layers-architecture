import React from 'react'
import Input from '.'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

   
describe("Input", () => {
  describe('component', () => {
    let component
    let onChangeHandler = jest.fn()
    let Input = (onChangeHandler: Function) =>
      <Input 
        type="text"
        name="password" 
        id="password"
        label="password:"
        className="red"
        onChangeHandler={onChangeHandler}
        required />
    
    it('renders as expected', () => {
      component = shallow(Input(onChangeHandler))

      expect(component).toMatchSnapshot();
    });

    describe("Input", () => {

    it('should set name based on props', () => {	
      component = shallow(Input(onChangeHandler)).find('input')

      expect(component.props().name).toEqual('password');
    });

    it('should set id  based on props', () => {	
      component = shallow(Input(onChangeHandler)).find('input')
      
      expect(component.props().id).toEqual('password');
    });

    it('should set label  based on props', () => {	
      component = shallow(Input(onChangeHandler)).find('input')
      
      expect(component.props().id).toEqual('password');
    });

    it('should copy rest of props', () => {	
      component = shallow(Input(onChangeHandler)).find('input')
      
      expect(component.props().required).toBe(true);
    });

    it('should invoke `clickHandler` on click', () => {
        const event = { persist: ()=>{}, currentTarget: {value: "spam"}};	
        component = shallow(Input(onChangeHandler)).find('input').simulate('change', event)
        
        expect(onChangeHandler.mock.calls.length).toEqual(1);
      });
    });

    describe("Label", () => {

      it('should set label based on props', () => {	
        component = shallow(Input(onChangeHandler)).find('label')
  
        expect(component.props().children).toEqual('password:');
      });

      it('should set className based on props', () => {	
        component = shallow(Input(onChangeHandler)).find('label')
  
        expect(component.props().className).toEqual('red');
      });

      it('should set htmlFor based on props', () => {	
        component = shallow(Input(onChangeHandler)).find('label')
  
        expect(component.props().htmlFor).toEqual('password');
      });
    })
  });
});
