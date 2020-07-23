import React from 'react'
import TransactionsListItem from './TransactionsListItem'
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

   
describe("TransactionsListItem", () => {
  describe('component', () => {
    it('renders as expected', () => {
     const  component = shallow(<TransactionsListItem  
      date="2020-04-23T14:40:55.275Z"
      amount={123}
      product="1f23"
      image="edsas"
      className='test'/>)

      expect(component).toMatchSnapshot();
    });

      it('should set props', () => {	
        const component = mount(<TransactionsListItem  
          date="2020-04-23T14:40:55.275Z"
          amount={123}
          product="1f23"
          image="edsas"
          className='test'/>)

          expect(component.props().date).toEqual('2020-04-23T14:40:55.275Z');
          expect(component.props().amount).toEqual(123);
          expect(component.props().product).toEqual('1f23'); 
          expect(component.props().image).toEqual('edsas'); 
          expect(component.props().className).toEqual('test'); 
      });

      it('should render an transation list item', () => {	
        const component = mount(<TransactionsListItem  
          date="2020-04-23T14:40:55.275Z"
          amount={123}
          product="1f23"
          image="edsas"
          className='test'/>)


          expect(component.find('article').length).toEqual(1);
          expect(component.find('article').prop('className')).toEqual('comp-transactionItem test');
          expect(component.find('img').length).toEqual(1);
          expect(component.find('img').prop('src')).toEqual('edsas');
          expect(component.find('h3').length).toEqual(1);
          expect(component.find('h3').text()).toEqual('1f23'); 
          expect(component.find('p').length).toEqual(2);
          expect(component.find('p').at(0).text()).toEqual('Date:4/3/2020'); 
          expect(component.find('p').at(1).text()).toEqual('Amount:$123');
      });
  });
});
