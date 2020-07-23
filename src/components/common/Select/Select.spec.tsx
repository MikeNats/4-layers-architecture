import React from './node_modules/react'
import Select from './Select'
import { shallow, mount } from './node_modules/enzyme';
import Adapter from './node_modules/enzyme-adapter-react-16';
import Enzyme from './node_modules/enzyme';

Enzyme.configure({ adapter: new Adapter() })

   
describe("Select", () => { 
    let onChangeHandler = jest.fn()
    
    it('renders as expected', () => {
     const component = shallow(<Select 
      id="sort" 
      options={
        [{name:'a-z', value:"A-Z"}, 
        {name:'z-a', value:"Z-A"}]}
      onChangeHandler={onChangeHandler}></Select>)

      expect(component).toMatchSnapshot();
    });
    it('should set props', () => {	
      const component = mount(<Select 
        id="sort" 
        options={
          [{name:'a-z', value:"A-Z"}, 
          {name:'z-a', value:"Z-A"}]}
        onChangeHandler={onChangeHandler}></Select>)

        expect(component.prop('id')).toBe('sort');
        expect(component.find('option').length).toBe(2);
    });

    it('should invoke onChangeHandler on change', () => {	
      const event = { persist: ()=>{}, currentTarget: {value: "spam"}};	

      const component = mount(<Select 
        id="sort" 
        options={
          [{name:'a-z', value:"A-Z"}, 
          {name:'z-a', value:"Z-A"}]}
        onChangeHandler={onChangeHandler}></Select>).simulate('change', event)

        expect(onChangeHandler.mock.calls.length).toEqual(1);
    });
});
