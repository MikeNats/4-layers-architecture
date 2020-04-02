import React, { Children } from 'react'
import Input from './index'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

   
describe("Input", () => {
  describe('component', () => {
    let component
    let onChangeHandler = jest.fn()
    
    it('renders as expected', () => {
     const  component = shallow(<Input  
        id="password" 
        name="password"
        type="password"
        placeholder="password"
        error={false}
        errorMessage="error message"
        onChange={onChangeHandler}
        required/>)

      expect(component).toMatchSnapshot();
    });

    describe("input", () => {
      it('should set props', () => {	
        const component = mount(<Input  
          id="password" 
          name="password"
          type="password"
          placeholder="password"
          error={true}
          errorMessage="error message"
          onChange={onChangeHandler}/>).find('input')
          expect(component.props().name).toEqual('password');
          expect(component.props().type).toEqual('password');
          expect(component.props().className).toEqual('comp-input  error'); 
          expect(component.props().id).toEqual('password'); 
      });

      it('should invoke `clickHandler` on click', () => {
          const event = { persist: ()=>{}, currentTarget: {value: "spam"}};	
          component = shallow(<Input  
            id="password" 
            name="password"
            type="password"
            placeholder="password"
            error={false}
            errorMessage="error message"
            onChange={onChangeHandler}/>).find('input').find('input').simulate('change', event)
          
          expect(onChangeHandler.mock.calls.length).toEqual(1);
      });
    });
    describe("input", () => {
      it('should set props', () =>{
        const component = mount(<Input  
          id="password" 
          name="password"
          type="password"
          placeholder="password"
          error={true}
          errorMessage="error message"
          onChange={onChangeHandler}/>).find('p')
          expect(component.props().className).toEqual('errorMessage hide show'); 
          expect(component.props().children).toEqual('error message'); 
      });
    });
  });
});
